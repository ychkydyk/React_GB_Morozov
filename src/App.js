import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import { NavBar } from './components/NavBar/NavBar'
import { MainPage } from "./Pages/MainPage";
import { ChatsPage } from "./Pages/ChatsPage/ChatsPage";
import { ProfilePage } from "./Pages/ProfilePage";
import { ChatList } from "./components/ChatList/ChatList";
import {nanoid} from "nanoid";

import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme, GlobalStyles } from "./theme";
import "./index.css";
import UIButton from "@mui/material/Button";

import { Provider } from 'react-redux' // подключаем чтобы обернуть всё наше приложение в redux
import { store } from './store'         // тоже для работы с redux




const defaultMessages = {
    default: [
        {
            author: 'GreetingsBot',
            text: 'Приветствую!'
        },
        {
            author: 'GreetingsBot',
            text: 'Напиши мне!'
        },
    ]
}

export function App() { //тема
    const [theme, setTheme] = useState("light");
    const switchTheme = () => {
        theme === "light" ? setTheme("dark") : setTheme("light");
    };

    const [messages, setMessages] = useState(defaultMessages)

    const chats = Object.keys(messages).map((chat) => ({
        id: nanoid(),
        name: chat
    }))

    const onAddChat = (newChat) => {
        console.log('newChat', newChat)
        setMessages({
            ...messages,
            [newChat.name]: []
        })
    }

    const onAddMessage = (chatId, newMassage) => {
        setMessages({
            ...messages,
            [chatId]: [...messages[chatId], newMassage]
        })
    }

    return (

        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
            <GlobalStyles />
        <>
            <Provider store={store}>
            <UIButton onClick={switchTheme}>Switch Theme</UIButton>
            <Routes>
                <Route path='/' element={<NavBar />} >
                    <Route index element={<MainPage />}  />
                    <Route path="profile" element={<ProfilePage />} />
                    <Route path="chats">
                        <Route index element={<ChatList chats={chats} onAddChat={onAddChat} />} />
                        <Route
                            path=":chatId"
                            element={<ChatsPage
                                chats={chats}
                                messages={messages}
                                onAddMessage={onAddMessage}
                                onAddChat={onAddChat} />}
                        />
                    </Route>
                </Route>
                <Route path="*" element={<h2>404 Page not FOUND</h2>} />
            </Routes>
            </Provider>
        </>
        </ThemeProvider>

    )
}