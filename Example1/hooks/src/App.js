import React,{useState} from 'react'
import './App.css';

function App() {
  const[data,setData]=useState("Neha")
  return (
    <div className="App">
      <h1>{data}</h1>
      <button onClick={()=>setData("Meera")}>Update Data</button>
    </div>
  );
}

export default App;
