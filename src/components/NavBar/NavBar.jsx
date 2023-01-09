import styles from './NavBar.module.css'

import { Outlet, NavLink } from "react-router-dom";
import { useSelector } from "react-redux"; // иморт для того чтобы вытащить данные ищ Redux State

import * as React from "react";

export const navigate = [
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
    {
        id: 6,
        name: 'SingIn',
        to: '/singin'
    },
    {
        id: 7,
        name: 'SignUp',
        to: '/signup'
    },
]

export function NavBar() {
    const name = useSelector((state) => state.profile.name) // присваиваем переменной значение из Redux Store
    return (
      <>
          <header>
              <nav className={styles.navbar}>
                  <ul>
                      {navigate.map((link) =>(
                          <li key={link.id}>
                              <NavLink
                                  to={link.to}
                                  style={({isActive})=>({
                                      color: isActive ? 'green' : 'blue'
                                  })}
                              >
                                  {link.name}
                              </NavLink>
                          </li>
                      ))}
                  </ul>
                  <h3>user: {name}</h3>
              </nav>
          </header>
          <main>
              <Outlet/>
          </main>
      </>
    )
}