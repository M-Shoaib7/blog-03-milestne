'use client'
import { createContext } from "react";

// the type for theme's data values
export interface ITheme {
    text:string,
    color:string,
    bg:string
}

// the type for global state variable
interface IThemeContext {
    theme:ITheme;
    setTheme:React.Dispatch<React.SetStateAction<ITheme>>;
}

// dont want to use undefined so making a default valued context with type of IThemeContext
const defaultContext:IThemeContext = {
    theme:{text:"Dark",color:'white',bg:'#0b0e14'},
    setTheme:()=>{}
}


const ThemeContext = createContext<IThemeContext>(defaultContext)

export default ThemeContext

// "'use client'

// import { createContext } from "react";
// interface IThemeContext {
//     theme:string,
//     setTheme:(theme:string) => void;
// }
// const ThemeContext = createContext<IThemeContext | undefined>(undefined)

// export default ThemeContext
// "