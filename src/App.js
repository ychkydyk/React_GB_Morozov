import { Routes, Route } from "react-router-dom";
import { useState } from "react"; //хук для использования state
import { Provider } from 'react-redux' // подключаем чтобы обернуть всё наше приложение в redux
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './store'
import "./index.css";

import { NavBar } from './components/NavBar/NavBar'
import { MainPage } from "./Pages/MainPage";
import { ChatsPage } from "./Pages/ChatsPage/ChatsPage";
import { ProfilePage } from "./Pages/ProfilePage";
import { AboutWithConnect } from "./Pages/AboutPage";
import { ChatList } from "./components/ChatList/ChatList";
import UIButton from "@mui/material/Button";

import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme, GlobalStyles } from "./theme";
import {NewsPage} from "./Pages/NewsPage";
import {SingIn} from "./Pages/SingIn";
import {SignUp} from "./Pages/SignUp";



export function App() {
    //тема
    const [theme, setTheme] = useState("light"); // usestate принимакт начальное состояние state
    const switchTheme = () => {
        theme === "light" ? setTheme("dark") : setTheme("light");
    };

// index в route означает, что при гравно урле отрисуется MainPage
    return (
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
            <GlobalStyles />
        <>
            <Provider store={store}>
                <PersistGate persistor={persistor}>
            <UIButton onClick={switchTheme}>Switch Theme</UIButton>
            <Routes>
                <Route path='/' element={<NavBar />} >
                    <Route index element={<MainPage />}  />
                    <Route path="profile" element={<ProfilePage />} />
                    <Route path="news" element={<NewsPage />} />
                    <Route path="about" element={<AboutWithConnect />} />
                    <Route path="singin" element={<SingIn />} />
                    <Route path="signup" element={<SignUp />} />
                    <Route path="chats">
                        <Route index element={<ChatList  />} />
                        <Route path=":chatId" element={<ChatsPage />}
                        />
                    </Route>
                </Route>
                <Route path="*" element={<h2>404 Page not FOUND</h2>} />
            </Routes>
                </PersistGate>
            </Provider>
        </>
        </ThemeProvider>
    )
}