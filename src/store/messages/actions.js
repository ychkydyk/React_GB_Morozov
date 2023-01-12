import * as types from "./types";
import {AUTHOR} from "../../constants";


export const addChat = (newChat) => ({
        type: types.ADD_CHAT ,
        payload: newChat
    }
)

export const deleteChat = (chatName) => ({
        type: types.DELETE_CHAT ,
        payload: chatName
    }
)

export const addMessage = (chatName, text) => ({
        type: types.ADD_MESSAGE ,
        payload: {chatName, text}
    }
)
let timeout
export const addMessageWithReply = (chatName, message) =>(dispatch) => {
    dispatch(addMessage(chatName, message))

    if(message.author !== AUTHOR.bot) {
        if (timeout) {
            clearTimeout(timeout)
        }

        timeout = setTimeout(()=>{
            dispatch(addMessage(chatName, {
                author: AUTHOR.bot,
                text: 'New script bot'
            }))
        }, 1000)
    }
}




