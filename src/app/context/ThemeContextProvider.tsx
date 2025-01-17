'use client'

import ThemeContext from "./ThemeContext";
import React, { ReactNode, useState } from "react";
import { ITheme } from "./ThemeContext";

interface IThemContextProviderProps {
    children:ReactNode
}

const ThemeContextProvider= ({children}:IThemContextProviderProps)=>{
    const [theme,setTheme] = useState<ITheme>({
        text:"Light",
        color:'white',
        bg:"#0b0e14"
    })

    return(
    <ThemeContext.Provider value={{theme,setTheme}}>
        {children}
    </ThemeContext.Provider>
    )
}

export default ThemeContextProvider