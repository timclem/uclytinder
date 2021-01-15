import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import Navbar from "./Navbar";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import NotFoundPage from "./pages/404";

function App() {
  return (
    
    
    <>
      
      <Router>
        <Switch>
          <Route exact path="/Home" exact render={() => <Home />} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/" exact render={() => <Login />} />
          <Route  component={NotFoundPage} />
        </Switch> 
      </Router>
      
    </>
  
  
  
  
  );
}

export default App;