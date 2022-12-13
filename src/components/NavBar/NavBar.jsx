import styles from './NavBar.module.css'

import { Outlet, NavLink } from "react-router-dom";

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
    }
]


export function NavBar() {
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
              </nav>
          </header>
          <main>
              <Outlet/>
          </main>
      </>
    )
}