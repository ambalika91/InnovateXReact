
import './App.css';
import { authorise } from "./Authentication.js";
import React, {useRef, useState} from "react";
import logo from './logo.svg';

function App() {
  const {loading, setLoading} = useState(false);
  const contentREef = useRef(null);

   const handleAzureAuth = async () => {

     try {
       const response = await authorise();
       console.log(response);
       if(contentREef.current) {
         contentREef.current.innerHTML = JSON.stringify(response);
       }
        else {
         console.error("Fetcg error");
       }
     } catch(error) {
       console.error(error);
     }
      
   }

  return (
    <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
      <button id="save-button" onClick={handleAzureAuth} disabled={loading}>Save content in the SharePoint</button>
      <div ref={contentREef}></div>
    </header>
  </div>
  );
}

export default App;
