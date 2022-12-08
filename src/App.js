
import {MessageList} from "./components/MessageList/MessageList";
import {Form} from "./components/Form/Form";
import {useState} from "react";


export function App() {
    const [messages, setMessages] = useState([
        {
            author:'Biba',
            text: '1'
         },
        {
            author:'Boba',
            text: '2'
        },
        {
            author:'Booba',
            text: '3'
        },
        {
            author:'Baaba',
            text: '4'
        },
    ])

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


