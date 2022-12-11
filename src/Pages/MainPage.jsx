
import {MessageList} from "../components/MessageList/MessageList";
import {Form} from "../components/Form/Form";
import {useEffect, useState} from "react";

import {ThemeProvider} from "styled-components";
import { GlobalStyle } from "../components/ui/DarkMode/GlobalStyle.js";
import { lightTheme, darkTheme } from "../components/ui/DarkMode/Themes"

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';



export function MainPage () {
    const [messages, setMessages] = useState([])

    const [theme, setTheme] = useState('light');
    const themeToggler = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light')
    }

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'left',
        color: theme.palette.text.secondary,
    }));

    const addMessage = (newMessage) => {
        setMessages([...messages, newMessage])
    }
    useEffect(()=>{
        if (messages.length > 0 && messages[messages.length -1].author === 'Me') {
            const timeout = setTimeout(() => {
                addMessage({
                    author: 'bot',
                    text: 'Отъебись!'
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
            <GlobalStyle/>
            <>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={3}>
                            <Item>Список чатов</Item>
                        </Grid>
                        <Grid item xs={9}>
                            <Item>
                                <button onClick={themeToggler}>Switch Theme</button>
                                <h1 style={{color: 'darkgreen'}}>Welcome to chat!!!</h1>
                                <Form addMessage={addMessage}/>
                                <MessageList messages={messages}/>
                            </Item>
                        </Grid>
                    </Grid>
                </Box>
            </>
        </ThemeProvider>
    )
}


