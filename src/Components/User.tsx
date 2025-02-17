import { useContext } from "react";
import { ColorContext } from "../ColorContext";


interface Props {
    userName: string,
    password: string
}

export default function User(props: Props) {
    const colors = useContext(ColorContext)
    return (
        <>
            <h1 style={{backgroundColor: colors}}>Username is : {props.userName}</h1>
            <h1>password is : {props.password}</h1>
        </>
    )
}