import { useState, useEffect } from "react";


export default function useLocalStorage (){
    const [email, setEmail] = useState("");

    useEffect (()=>{
        const email = localStorage.getItem("email");

        if(email){
            setEmail(email);
        }
    },[]);

    useEffect(()=>{
        localStorage.setItem("email", email);
    },[email]);

    return {
        email, setEmail
    }
}