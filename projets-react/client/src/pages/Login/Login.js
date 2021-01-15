
import "./Login.css";
import { useState } from "react";
import Axios from 'axios';
import { useEffect } from 'react';
import { BrowserRouter as Redirect, Route} from "react-router-dom";


function Login() {

  const [maillog, setMail] = useState("");
  const [passwordlog, setPassword] = useState("");
  const [loginStatus, setLoginStatus] =  useState("")

  Axios.defaults.withCredentials = true;

  const login = () => {
    Axios.post('http://localhost:5000/login',{
      mail: maillog,
      password: passwordlog
    }).then((response) => {

      if (response.data.message) {
        setLoginStatus(response.data.message);
      } else {
        setLoginStatus(<a href="/home"><button>Go</button></a>);
      }
      console.log(response.data);
    });
  };

  useEffect(() => {
    Axios.get("http://localhost:5000/login").then((response) => {
      if (response.data.loggedIn == true) {
        setLoginStatus(<a href="/home"><button>Go</button></a>);
      }
    });
  }, []);


  return (
     

    <div className="Register">
      
      <div className="RegisterForm">

        
        

        <input 
          type="text"
          placeholder ="Email..." 
          onChange={(event) => {
            setMail(event.target.value);
          }}
        />
        
        <input 
          type="password"
          placeholder="Password..."
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <h1>{loginStatus}</h1>

        <button onClick={login}>Login</button>
        
        <a href="/register"><button>Sign in</button></a>
        
        
      
      </div>
    
    </div>

  
  );
}


export default Login;
