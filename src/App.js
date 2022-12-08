
import {MessageList} from "./components/MessageList/MessageList";
import {Form} from "./components/Form/Form";
import {useState} from "react";


export function App() {
    const [messages, setMessages] = useState([])

    const addMessage = (newMessage) => {
        setMessages([...messages, newMessage])
    }


    return (
        <>
            <h1 style={{color: 'darkgreen'}}>Welcome to chat!</h1>
            <Form addMessage={addMessage}/>
            <MessageList messages={messages}/>
        </>
    )
}


