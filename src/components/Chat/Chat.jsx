import React, { useEffect, useRef, useState } from "react";
import "./chat.css";
import EmojiPicker from "emoji-picker-react";
import { onSnapshot } from "firebase/firestore";
import {db} from '../../lib/firebase.js'
import { doc } from "firebase/firestore";

const Chat = () => {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");
  const [chat , setChat] = useState();

  const endref = useRef(null);

  useEffect(()=>{
    endref.current ?.scrollIntoView({behavior : 'smooth'})
  })
  useEffect(()=>{
    const unSub =  onSnapshot(doc(db,'chats' , 'uUp93aMsj6QcDs3RL2aZYaJBcN62'),
    (res)=>{
     setChat(res.data());
    }
  )
  

  return ()=>{
    unSub();
  }
  })
  

  const handleEmoji = (e) => {
    setText((prev) => prev + e.emoji);
    setOpen(false);
  };

  return (
    <div className="chat">
      <div className="top">
        <div className="user">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <span>John Doe</span>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
        <div className="icons">
          <img src="./phone.png" alt="" />
          <img src="./video.png" alt="" />
          <img src="./info.png" alt="" />
        </div>
      </div>
      <div className="center">
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus, cupiditate ex velit enim id exercitationem obcaecati
              architecto recusandae in, ipsa vitae excepturi alias consectetur.
              Sunt, reiciendis praesentium. Consequatur, nesciunt blanditiis
              corrupti corporis itaque excepturi.
            </p>
              <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus, cupiditate ex velit enim id exercitationem obcaecati
              architecto recusandae in, ipsa vitae excepturi alias consectetur.
              Sunt, reiciendis praesentium. Consequatur, nesciunt blanditiis
              corrupti corporis itaque excepturi.
            </p>
              <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="" />

          <div className="texts">
          <img src="public/img 1.jpg" alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus, cupiditate ex velit enim id exercitationem obcaecati
              architecto recusandae in, ipsa vitae excepturi alias consectetur.
              Sunt, reiciendis praesentium. Consequatur, nesciunt blanditiis
              corrupti corporis itaque excepturi.
            </p>
              <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
          <img src="public/img 1.jpg" alt="" />

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus, cupiditate ex velit enim id exercitationem obcaecati
              architecto recusandae in, ipsa vitae excepturi alias consectetur.
              Sunt, reiciendis praesentium. Consequatur, nesciunt blanditiis
              corrupti corporis itaque excepturi.
            </p>
              <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus, cupiditate ex velit enim id exercitationem obcaecati
              architecto recusandae in, ipsa vitae excepturi alias consectetur.
              Sunt, reiciendis praesentium. Consequatur, nesciunt blanditiis
              corrupti corporis itaque excepturi.
            </p>
              <span>1 min ago</span>
          </div>
        </div>
        <div ref={endref}></div>
      </div>
      <div className="bottom">
        <div className="icons">
          <img src="./img.png" alt="" />
          <img src="./camera.png" alt="" />
          <img src="mic.png" alt="" />
        </div>
        <input
          type="text"
          value={text}
          placeholder="Type a message..."
          onChange={(e) => setText(e.target.value)}
        />
        <div className="emoji">
          <img
            src="./emoji.png"
            alt=""
            onClick={() => {
              setOpen((prev) => !prev);
            }}
          />
          <div className="picker">
            <EmojiPicker open={open} onEmojiClick={handleEmoji} />
          </div>
        </div>
        <button className="sendButton">Send</button>
      </div>
    </div>
  );
};

export default Chat;
