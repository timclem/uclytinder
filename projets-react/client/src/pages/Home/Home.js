import "./Home.css";
import { useState } from "react";
import Axios from "axios";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="body">
      <div class="entetegauche">
        <button class="menu" type="button">
          <img class="iconmenu" src="menu.png" alt="menu" />
          Mon profil
        </button>

        <button class="match" type="button">
          Match
        </button>

        <button class="message" type="button">
          Messages
        </button>
      </div>
      <div class="searchmatch">
        <p class="TinderUcly">TinderUcly</p>
        <div class="profil">
          <img src="macron.jpg" alt="photo de profil" />
        </div>
        <div class="choix">
          <button class="dislike" type="button">
            Dislike
          </button>
          <button class="like" type="button">
            Like
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
