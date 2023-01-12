import {createGlobalStyle} from "styled-components"

export const darkTheme = {
    body: "#6c4698",
    textColor: "#fff",
    headingColor: "lightblue",
    navbarColor: "lightblue"
}

export const lightTheme = {
    body: "lightblue",
    textColor: "#000",
    headingColor: "#6c4698",
    navbarColor: "#6c4698"

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