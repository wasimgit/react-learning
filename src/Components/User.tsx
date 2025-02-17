import { useContext, useState } from "react";
import { ColorContext } from "../context/ColorContext";
import { ThemeContext } from "../context/Theme";


interface Props {
    userName: string,
    password: string
}

export default function User(props: Props) {
    const colors = useContext(ColorContext)
    const [count, setCount] = useState(0)
    const { theme, toggleTheme } = useContext(ThemeContext)

    function handleClick() {
        return setCount(count + 1)
    }

    return (
        <>
            <button onClick={() => toggleTheme()}>{theme}</button>
            <h1 style={{backgroundColor: colors}}>Username is : {props.userName}</h1>
            <h1>password is : {props.password}</h1>
            <button onClick={handleClick}>{count}</button>
        </>
    )
}