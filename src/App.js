import {Routes, Route} from "react-router-dom";

import { NavBar } from './components/NavBar/NavBar'
import { MainPage } from "./Pages/MainPage";
import {ChatsPage} from "./Pages/ChatsPage";
import {ProfilePage} from "./Pages/ProfilePage";

export function App() {
    return (
        <>
            <Routes>
                <Route path='/' element={<NavBar/>}>
                    <Route index element={<MainPage/>}></Route>
                    <Route path="chats" element={<ChatsPage/>}></Route>
                    <Route path="profile" element={<ProfilePage/>}></Route>
                </Route>
            </Routes>
        </>
    )
}