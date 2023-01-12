import {createGlobalStyle} from "styled-components"
import React from 'react'

export const darkTheme = {
    theme: 'dark',
    body: "#6c4698",
    textColor: "#fff",
    headingColor: "lightblue",
    navbarColor: " #282c34",
    iconText: "🌙"
}

export const lightTheme = {
    theme: 'light',
    body: "lightblue",
    textColor: "#000",
    headingColor: "#6c4698",
    navbarColor: "#6c4698",
    iconText: "🌞"
}

export const GlobalStyles = createGlobalStyle`
 body {
  background: ${props => props.theme.body};
  color: ${props => props.theme.textColor};
  transition: .3s ease;
 }
 h1{
   color: ${props => props.theme.headingColor};
 }
 
 header {
 background-color: ${props => props.theme.navbarColor};
 }
`
export const ThemeContext = React.createContext(lightTheme)