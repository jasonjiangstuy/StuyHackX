import React from "react";
import PlayButton from "./PlayButton";
import ButtonAppBar from "./ButtonAppBar";
import Interests from "./Interests";
import FriendsList from "./FriendsList";
import Login from "./Login/Login";
import Queue from "./Queing/queue.js";
import Go from "./Go/Go.js";
function App() {
  return (
    <>

    {/* -- Testing for Jason, Login / Start team */}
    
      <ButtonAppBar/>   
       {/* <Login />  */}
       
      {/* <Queue />  */}
      <Go />
      


      {/* -- Vivien Client --- */}

    {/* <div className="App">
      <header className="App-header">
        <ButtonAppBar/>
      </header>
      <center>
      <p>
      INTERESTS
      </p>
      <Interests/>
      </center>
      <center>
      <p>
      TOPICS
      </p>
      <Interests/>
      </center>
      <PlayButton/>
      <FriendsList/>
    </div> */}
    
    </>
  );
}

export default App;
