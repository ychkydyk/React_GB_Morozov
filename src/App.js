import { Routes, Route } from "react-router-dom";
import {useEffect, useState} from "react"; //хук для использования state
import { useDispatch} from 'react-redux' // подключаем чтобы обернуть всё наше приложение в redux
import { PersistGate } from 'redux-persist/integration/react'
import { persistor } from './store'
import "./index.css";

import { NavBar } from './components/NavBar/NavBar'
import { MainPage } from "./Pages/MainPage";
import { ChatsPage } from "./Pages/ChatsPage/ChatsPage";
import { ProfilePage } from "./Pages/ProfilePage";
import { AboutWithConnect } from "./Pages/AboutPage";
import { ChatList } from "./components/ChatList/ChatList";

import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme, GlobalStyles } from "./theme";
import {NewsPage} from "./Pages/NewsPage";
import {SingIn} from "./Pages/SingIn";
import {SignUp} from "./Pages/SignUp";
import {PrivateRoute} from "./authRoute/PriviteRoute";
import {firebaseAuth} from "./services/firebase";
import {auth} from "./store/profile/actions";
import {PublicRoute} from "./authRoute/PublicRoute";



export function App() {
    const dispatch = useDispatch()
    //тема
    const [theme, setTheme] = useState("light");
    const switchTheme = () => {
        theme === "light" ? setTheme("dark") : setTheme("light");
    };

    useEffect(() => {
        const unsubscribe = firebaseAuth.onAuthStateChanged((user) => {
            if (user) {
                dispatch(auth(true))
            } else {
                dispatch(auth(false))
            }
        })
        return unsubscribe
    }, [dispatch])

// index в route означает, что при главном урле отрисуется MainPage
    return (
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
            <GlobalStyles />
        <>
                <PersistGate persistor={persistor}>

            <Routes>
                <Route  path='/' element={<NavBar switchTheme={switchTheme} />} >
                    <Route index element={<MainPage />}  />
                    <Route path="profile" element={<ProfilePage />} />
                    <Route path="news" element={<NewsPage />} />
                    <Route path="about" element={<AboutWithConnect />} />
                    <Route path="login" element={<PublicRoute component={<SingIn />} />} />
                    <Route path="logout" element={<SignUp />} />
                    <Route path="chats" element={<PrivateRoute />}>
                        <Route
                            index
                            element={<ChatList/>}
                        />
                        <Route
                            path=":chatId"
                            element={<ChatsPage />}
                        />
                    </Route>
                </Route>
                <Route path="*" element={<h2>404 Page not FOUND</h2>} />
            </Routes>
                </PersistGate>
        </>
        </ThemeProvider>
    )
}