
import './Register.css';
import { useState } from "react";
import Axios from 'axios';

function Register() {

  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [sex, setSex] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");


  Axios.defaults.withCredentials = true;

  const addSignIn = () => {
    Axios.post('http://localhost:5000/signIn',{
      name: name, 
      age: age, 
      sex: sex,
      mail: mail,
      password: password
    }).then(() => {
      console.log("success");
    });
  };

  return (
    
    <div className="App">
      <div className="information">
        
        
        <input 
          type="text" 
          placeholder="Name..."
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        
        
        <input 
          type="number"
          placeholder="Age.."
          onChange={(event) => {
            setAge(event.target.value);
          }}
        />

        <input 
          type="text"
          placeholder="Sex.."
          onChange={(event) => {
            setSex(event.target.value);
          }}
        />
      
        <input 
          type="email"
          placeholder="Email..."
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


        <button onClick={addSignIn}>Send</button>
        <a href="/"><button>Login</button></a>
      </div>
      
    
    </div>

  
  );
}


export default Register;