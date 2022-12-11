import {MessageList} from "../components/MessageList/MessageList";

import {Form} from "../components/Form/Form";
import {useEffect, useState} from "react";
import {useParams, Navigate} from "react-router-dom";


import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import {ChatList} from "../components/ChatList/ChatList";



export function ChatsPage ({onAddChat, onAddMessage, messages, chats}) {

    const {chatId} = useParams()

    const  Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'left',
        color: theme.palette.text.secondary,
    }));

    useEffect(() => {
        if (chatId &&
            messages[chatId]?.length > 0 &&
            messages[chatId][messages[chatId].length - 1].author === 'Me'
        ) {
            const timeout = setTimeout(() => {
                onAddMessage(chatId, {
                    author: 'bot',
                    text: 'Отъебись!'
                })
            }, 1500)

            return () => {
                clearTimeout(timeout)
            }
        }
    }, [chatId, messages])

    const handleAddMessage = (message) => {
        if (chatId) {
            onAddMessage(chatId, message)
        }
    }

if(chatId && !messages[chatId]) {
    return <Navigate to="/chats" replace />
}
    return (
            <>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={3}>
                            <Item>
                                <ChatList chats={chats}  onAddChat={onAddChat} />
                            </Item>
                        </Grid>
                        <Grid item xs={9}>
                            <Item>
                                <h1 style={{color: 'darkgreen'}}>Welcome to chat!!!</h1>
                                <Form addMessage={handleAddMessage}/>
                                <MessageList messages={chatId ? messages[chatId] : []}/>
                            </Item>
                        </Grid>
                    </Grid>
                </Box>
            </>
    )
}
