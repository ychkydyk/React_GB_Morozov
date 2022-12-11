import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import { NavBar } from './components/NavBar/NavBar'
import { MainPage } from "./Pages/MainPage";
import { ChatsPage } from "./Pages/ChatsPage";
import { ProfilePage } from "./Pages/ProfilePage";
import { ChatList } from "./components/ChatList/ChatList";
import {nanoid} from "nanoid";

const defaultMessages = {
    default: [
        {
            author: 'Me',
            text: 'Продам гараж'
         },
        {
            author: 'Me',
            text: 'Просто объявление'
         }
]}

export function App() {
    const [messages, setMessages] = useState(defaultMessages)

    const chats = Object.keys(messages).map((chat)=>({
            id: nanoid(),
            name: chat
        }
    ))

    const onAddChat = (newChat) => {
        setMessages({
            ...messages,
            [newChat.name]: []
        })
    }

    const onAddMessage = (chatId, newMessage) => {
        setMessages({
            ...messages,
            [chatId]: [messages[chatId], newMessage]
        })
    }

    return (
        <>
            <Routes>
                <Route path='/' element={<NavBar />}>
                    <Route index element={<MainPage />}></Route>
                    <Route path="chats" >
                        <Route index element={<ChatList chats={chats} onAddChat={onAddChat} />} />
                        <Route
                            path=":chatId"
                            element={<ChatsPage
                                onAddChat={onAddChat}
                                chats={chats}
                                messages={messages}
                                onAddMessage={onAddMessage}

                            />} />
                    </Route>
                    <Route path="profile" element={<ProfilePage />}></Route>
                </Route>
                <Route path="*" element={<h2>404 error</h2>}/>
            </Routes>
        </>
    )
}