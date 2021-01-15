import "./Home.css";
import { useState } from "react";
import Axios from 'axios';


function App() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
  return (
     

    <div className="Register">
      
      <div className="RegisterForm">  

        <button >Delete account </button>
        
      </div>
    
    </div>

  
  );
}


export default App;
