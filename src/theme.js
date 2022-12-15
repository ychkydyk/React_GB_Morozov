import {createGlobalStyle} from "styled-components"

export const darkTheme = {
    body: "#000",
    textColor: "#fff",
    headingColor: "lightblue"
}

export const lightTheme = {
    body: "#fff",
    textColor: "#000",
    headingColor: "#d23669",

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
 button {
 background: ${props => props.theme.body};
 color: ${props => props.theme.textColor};
 }
`