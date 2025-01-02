import React, { useEffect, useState } from "react";
import "./chatList.css";
import Adduser from "./addUser/Adduser";
import { useUserStore } from "../../../lib/userStore.js";
import { onSnapshot , doc, getDoc} from "firebase/firestore";
import { db } from "../../../lib/firebase.js";
const ChatList = () => {
  const [addMode, setAddMode] = useState(false);
  const [chats, setChats] = useState([]);

  const { currentUser } = useUserStore();
  

  useEffect(() => {
    const unsub = onSnapshot(doc(db, "userchats", currentUser.id),
    async (res) => {
      const items = res.data().chats;



      const promises = items.map(async(item)=>{
        const userDocRef = doc(db,'users' , item.receiverId )
        const userDocSnap = await getDoc(userDocRef);

        const user = userDocSnap.data()

        return {...item , user}
      })

      const chatData = await Promise.all(promises)

      setChats(chatData.sort((a,b) =>  b.updatedAt - a.updatedAt ))
    });

    return()=>{
      unsub();
    }
  }, [currentUser.id]);


  const handleSelect  = async(chat)=>{

  }



  return (
    <div className="chatList">
      <div className="search">
        <div className="searchBar">
          <img src="./search.png" alt="search" />
          <input type="text" placeholder="search" />
        </div>
        <img
          className="add"
          src={addMode ? "./minus.png" : "./plus.png"}
          alt=""
          onClick={() => setAddMode((prev) => !prev)}
        />
      </div>
      {chats.map(chat=>(

        <div className="item" key={chat.chatId} onClick={()=> handleSelect(chat.chatId)}>
        <img src={chat.user.avatar || "./avatar.png"} alt="" />
        <div className="texts">
          <span>{chat.user.username}</span>
          <p>{chat.lastMessage}</p>
        </div>
      </div>
      ))}
      {addMode && <Adduser />}
    </div>
  );
};

export default ChatList;
