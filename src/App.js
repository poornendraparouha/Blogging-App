// import Blog from "./Components/Blog";
import { useState } from "react";
import Login from "./Components/loginPage";
import Reset from "./Components/resetPassword";

function App() {
const [form, setForm] = useState("Login");

  return (
    <div className="App">
      <h1>Welcome!!</h1>
    {form === "Login"? <Login/> : <Reset/> }
    <br/>
    <button onClick={()=>{setForm(form === "Login"? "Reset" : "Login")}}>
      {form === "Login"? "Forgot Password" : "Back to Login" }
    </button>

    </div>
    // <>
    //   <Blog />
    // </>
  );
}

export default App;
