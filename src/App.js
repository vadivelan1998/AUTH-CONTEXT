import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/navbar';
import {Button} from "./components/button";
import {AuthContext} from "./components/contexts/AuthContext"
import { useContext } from 'react';
import { Display } from './components/display';
function App() {
  const {isAuth,toggleAuth}=useContext(AuthContext)
  return (
    <div className="App">
      <Navbar width={"98%"} height={"40px"} border={"1px solid"}>
        <Button
          onClick={() => {
            toggleAuth();
          }}
          color={"white"}
          bgcolor={"rgb(36,144,254)"}
          border={"0px"}
        >
          {isAuth == false ? "Login" : "Logout"}
        </Button>
      </Navbar>
      {isAuth == false ? "" : <Display />}
    </div>
  );
}

export default App;
