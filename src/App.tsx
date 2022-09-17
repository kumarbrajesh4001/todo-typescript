import React from "react";
import Todo from "./component/Todo";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Todo />
      {/* <Profile name="kumar" age={23} status="printer" />
      <Profile name="kumar" age={24} status="developer" />
      <Profile age={25} status="coder" />
      <Profile age={25} status="coder" ><span style={{color:'red'}}>hello hi</span></Profile> */}
    </div>
  );
}

export default App;
