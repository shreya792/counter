import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setcounter]=useState(5)
const add = () =>{
  if(counter<20){
    setcounter(counter+1);
  }
  
}
const remove = () =>{
  if(counter>0){
    setcounter(counter-1);
  }

}
 
  
  return (
  
     
    
    <>

    <h1>Counter {counter} </h1>
   <h2>

   <button onClick={add}>Add value {counter}</button>
   <br />
   <br />
   <button onClick={remove}>Remove value {counter}</button>
   </h2>
    </>
  )
}

export default App
