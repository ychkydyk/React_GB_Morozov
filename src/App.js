import { Routes, Route } from "react-router-dom";

import { NavBar } from './components/NavBar/NavBar'
import { MainPage } from "./Pages/MainPage";
import { ChatsPage } from "./Pages/ChatsPage";
import { ProfilePage } from "./Pages/ProfilePage";

import { ChatList } from "./components/ChatList/ChatList";

export function App() {
    return (
        <>
            <Routes>
                <Route path='/' element={<NavBar />}>
                    <Route index element={<MainPage />}></Route>
                    <Route path="chats" >
                        <Route index element={<ChatList />} />
                        <Route path=":chatId" element={<ChatsPage />} />
                    </Route>
                    <Route path="profile" element={<ProfilePage />}></Route>
                </Route>

                <Route path="*" element={<h2>404 error</h2>}/>
            </Routes>
        </>
    )
}