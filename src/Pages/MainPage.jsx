import { useState} from "react";

import {ThemeProvider} from "styled-components";
import { GlobalStyle } from "../components/ui/DarkMode/GlobalStyle.js";
import { lightTheme, darkTheme } from "../components/ui/DarkMode/Themes"
import * as React from 'react';

;

export function MainPage () {

    const [theme, setTheme] = useState('light');
    const themeToggler = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light')
    }

    return (
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
            <GlobalStyle/>
            <>
                <button onClick={themeToggler}>Switch Theme</button>
                <h1>Main Page</h1>
            </>
        </ThemeProvider>
    )
}


