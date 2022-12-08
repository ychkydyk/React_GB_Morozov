
import {MessageList} from "./components/MessageList/MessageList";
import {Form} from "./components/Form/Form";
import {useEffect, useState} from "react";


export function App() {
    const [messages, setMessages] = useState([])

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

    },[messages])


    return (
        <>
            <h1 style={{color: 'darkgreen'}}>Welcome to chat!!!</h1>
            <Form addMessage={addMessage}/>
            <MessageList messages={messages}/>
        </>
    )
}


