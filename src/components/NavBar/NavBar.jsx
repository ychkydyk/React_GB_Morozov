import styles from './NavBar.module.css'
import * as React from "react";

import {Outlet, NavLink, useNavigate} from "react-router-dom";
import { useSelector } from "react-redux"; // иморт для того чтобы вытащить данные ищ Redux State


import {logOut} from "../../services/firebase";

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
    {
        id:4,
        name: 'About',
        to: '/about'
    },
    {
        id:5,
        name: 'News',
        to: '/news'
    },
    // {
    //     id: 6,
    //     name: 'login',
    //     to: '/login'
    // },
    // {
    //     id: 7,
    //     name: 'logout',
    //     to: '/logout'
    // },
]

export function NavBar() {
    const navigate = useNavigate()

    // const name = useSelector(selectName())
    // const isAuth = useSelector(selectAuth())
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
                                        color: isActive ? 'green' : 'blue'
                                    })}
                                >
                                    {link.name}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                    {!isAuth && (
                        <>
                            <button onClick={handleLogin}>login</button>
                            <button onClick={handleSignUp}>sing up</button>
                        </>
                    )}
                    {isAuth && (
                        <>
                            <button onClick={handleLogout}>logout</button>
                        </>
                    )}
                    <p>{name}</p>
                </nav>
            </header>
            <main>
                <Outlet/>
            </main>
        </>
    )
}