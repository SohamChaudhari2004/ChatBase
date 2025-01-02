import { doc, getDoc } from 'firebase/firestore';
import { create } from 'zustand'
import { db } from './firebase';
import useUserStore from "../lib/userStore.js"
export const useChatStore = create((set) => ({
  chatId: null,
  user: null,
  isCurrentUserBlocked: false,
  isRecieverBlocked: false,
  
  changeChat : (chatId , user)=>{
    const currentUser  = useUserStore.getState().currentUser

    // check if current user is blocked
    if(user.blocked.includes(currentUser.id)){
        return set({
            chatId,
            user : null,
            isCurrentUserBlocked: true,
            isRecieverBlocked: false,
        })
    }

    // check if reciever is blocked
    if(currentUser.blocked.includes(user.id)){
        return set({
            chatId,
            user : null,
            isCurrentUserBlocked: false,
            isRecieverBlocked: true,
        })
    }
  },
  changeBlock: ()=>{
    set(state => ({...state , isRecieverBlocked : !isRecieverBlocked}))
  }
}))
