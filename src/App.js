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
import { ChatList } from "./components/ChatList/ChatList";

import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme, GlobalStyles,ThemeContext } from "./theme";
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
    const [theme, setTheme] = useState(lightTheme.theme)
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
        <ThemeProvider value={{
            theme,
            switchTheme
        }} theme={theme === "light" ? lightTheme : darkTheme}>
            <GlobalStyles />
        <>
                <PersistGate persistor={persistor}>
                    <ThemeContext.Provider value={{
                        theme,
                        switchTheme
                    }}>
            <Routes>
                <Route  path='/' element={<NavBar switchTheme={switchTheme} />} >
                    <Route index element={<MainPage />}  />
                    <Route path="profile" element={<ProfilePage />} />
                    <Route path="news" element={<NewsPage />} />
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
                    </ThemeContext.Provider>
                </PersistGate>
        </>
        </ThemeProvider>
    )
}