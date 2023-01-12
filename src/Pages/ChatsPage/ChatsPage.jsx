import {MessageList} from "../../components/MessageList/MessageList";

import {Form} from "../../components/Form/Form";

import {useParams, Navigate} from "react-router-dom";


import * as React from 'react';
import {ChatList} from "../../components/ChatList/ChatList";

import { WithClasses } from '../../components/HOC/WithClasses'
import styles from './ChatsPage.module.css'
import {useSelector} from "react-redux";
import {selectMessage} from "../../store/messages/selectors";



export function ChatsPage () {

    const {chatId} = useParams()
    const messages = useSelector(selectMessage)

    const MessagesListWithClass = WithClasses(MessageList)


    if(chatId && !messages[chatId]) {
        return <Navigate to="/chats" replace />
    }
    return (
            <>
                <ChatList />
                <h2 >Welcome to chat!!!</h2>
                <MessagesListWithClass
                    messages={chatId ? messages[chatId] : []}
                    classes={styles.border}
                />
                <Form />
            </>
    )
}
