import {MessageList} from "../../components/MessageList/MessageList";

import {Form} from "../../components/Form/Form";
import {useEffect} from "react";
import {useParams, Navigate} from "react-router-dom";
import { AUTHOR } from '../../constants'

import * as React from 'react';
import {ChatList} from "../../components/ChatList/ChatList";

import { WithClasses } from '../../components/HOC/WithClasses'
import styles from './ChatsPage.module.css'



export function ChatsPage ({onAddChat, onAddMessage, messages, chats}) {

    const {chatId} = useParams()

    const MessagesListWithClass = WithClasses(MessageList)

    useEffect(() => {
        if (chatId &&
            messages[chatId]?.length > 0 &&
            messages[chatId][messages[chatId].length - 1].author === AUTHOR.user
        ) {
            const timeout = setTimeout(() => {
                onAddMessage(chatId, {
                    author: AUTHOR.bot,
                    text: 'Отъебись!'
                })
            }, 1500)

            return () => {
                clearTimeout(timeout)
            }
        } // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [chatId, messages])

    const handleAddMessage = (massage) => { // добавление сообщения длся юзера
        // на массаж не ругается
        if (chatId) {
            onAddMessage(chatId, massage)
        }
    }

    if(chatId && !messages[chatId]) {
        return <Navigate to="/chats" replace />
    }
    return (
            <>
                <ChatList chats={chats}  onAddChat={onAddChat} />
                <h2 >Welcome to chat!!!</h2>
                <MessagesListWithClass
                    messages={chatId ? messages[chatId] : []}
                    classes={styles.border}
                />
                <Form addMessage={handleAddMessage}/>
            </>
    )
}
