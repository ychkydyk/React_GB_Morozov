
import {MessageList} from "./components/MessageList/MessageList";
import {Form} from "./components/Form/Form";
import {useEffect, useState} from "react";

import {ThemeProvider} from "styled-components";
import { GlobalStyle } from "./components/ui/DarkMode/GlobalStyle.js";
import { lightTheme, darkTheme } from "./components/ui/DarkMode/Themes"


export function App() {
    const [messages, setMessages] = useState([])

    const [theme, setTheme] = useState('light');
    const themeToggler = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light')
    }

    const addMessage = (newMessage) => {
        setMessages([...messages, newMessage])
    }
    useEffect(()=>{
        if (messages.length > 0 && messages[messages.length -1].author === 'Me') {
           const timeout = setTimeout(() => {
                addMessage({
                    author: 'bot',
                    text: 'Im Bot'
                })
            }, 1500)
            return() => {
                clearTimeout(timeout)
            }
        }
// eslint-disable-next-line react-hooks/exhaustive-deps
    },[messages])


    return (
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <>
            <GlobalStyle/>
            <button onClick={themeToggler}>Switch Theme</button>
            <h1 style={{color: 'darkgreen'}}>Welcome to chat!!!</h1>
            <Form addMessage={addMessage}/>
            <MessageList messages={messages}/>
        </>
        </ThemeProvider>
    )
}


