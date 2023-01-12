import styles from './NavBar.module.css'
import * as React from "react";

import {Outlet, NavLink, useNavigate} from "react-router-dom";
import { useSelector } from "react-redux"; // иморт для того чтобы вытащить данные ищ Redux State

import {logOut} from "../../services/firebase";
import Button from "@mui/material/Button";
import UIButton from "@mui/material/Button";
import {useContext} from "react";
import {ThemeContext} from "../../theme";

export const navigates = [
    {
        id:1,
        name: 'Main',
        to: '/'
    },
    {
        id:2,
        name: 'Chats',
        to: '/chats'
    },
    {
        id:3,
        name: 'Profile',
        to: '/profile'
    },
    // {
    //     id:4,
    //     name: 'About',
    //     to: '/about'
    // },
    {
        id:5,
        name: 'News',
        to: '/news'
    },

]

export function NavBar() {
    const navigate = useNavigate()
    const { theme, switchTheme } = useContext(ThemeContext)
    const name = useSelector((store) => store.profile.name)
    const isAuth = useSelector((store) => store.profile.isAuth)

    const handleLogin = () => {
        navigate('/login')
    }
    const handleSignUp = () => {
        navigate('/logout')
    }
    const handleLogout = async () => {
        await logOut()
    }

    return (
        <>
            <header>
                <nav className={styles.navbar}>
                    <ul>
                        {navigates.map((link) => (
                            <li key={link.id}>
                                <NavLink
                                    to={link.to}
                                    style={({ isActive }) => ({
                                        color: isActive ? 'green' : 'black'
                                    })}
                                >
                                    {link.name}
                                </NavLink>
                            </li>
                        ))}
                    </ul>

                    <UIButton onClick={switchTheme}
                    >Switch<p>{theme === 'light' ? '🌞' : '🌙'}</p>
                    </UIButton>
                    <p>user: {name}</p>
                    <div  className={styles.leftbar}>
                    {isAuth && (
                        <>
                            <Button onClick={handleLogout}>logout</Button>
                        </>
                    )}
                        {!isAuth && (
                            <>
                                <Button onClick={handleLogin}>login</Button>
                                <Button onClick={handleSignUp}>registration</Button>
                            </>
                        )}
                </div>
                </nav>
            </header>
            <main>
                <Outlet/>
            </main>
        </>
    )
}