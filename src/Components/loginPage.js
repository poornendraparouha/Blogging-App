import { useState } from "react";
import useLocalStorage from "./useLocalStorage";

export default function Login(){
    // const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
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
        <h1>Login to the portal</h1>
        <input 
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        />
        <br/>
        <input 
        placeholder="Enter your password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        />
        <br/>
        <button>Login</button>
        </>
    )
}

