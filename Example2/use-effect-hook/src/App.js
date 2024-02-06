import React,{useEffect,useState} from 'react'
import './App.css';

function App() {
  const [count,setCount]=useState(0)
  useEffect(()=>{
    alert("useEffect")
  })
  return (
    <div className="App">
      <h1>useEffect{count}</h1>
      <button onClick={()=>setCount(count+1)}>UpdateCount</button>
    </div>
  );
}

export default App;
