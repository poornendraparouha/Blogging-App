// import { useEffect, useState } from "react";
import useLocalStorage from "./useLocalStorage";

export default function Reset(){
    // const [email, setEmail] = useState("");
    const {email, setEmail} = useLocalStorage();


    // useEffect (()=>{
    //     const email = localStorage.getItem("email");

    //     if(email){
    //         setEmail(email);
    //     }
    // },[]);

    // useEffect(()=>{
    //     localStorage.setItem("email", email);
    // },[email]);

    return(
        <>
        <h1>Reset Your Password</h1>
        <input 
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        />
        <br/>
        <button >Continue</button>
        <br/>
        </>
    )
}
