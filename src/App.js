import {useState} from "react";
import {MessageList} from "./components/MessageList/MessageList";
import {Form} from "./components/Form/Form";


export function App() {
    return (
        <>
            <h1 style={{color: 'darkgreen'}}>Welcome to chat!</h1>
            <Form/>
            <MessageList/>
        </>
    )
}


