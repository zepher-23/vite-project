import { useState,useEffect } from 'react'
import './App.css'
import  NavBar from "./NavBar"


//useState()



function App() {


  const [message,setMessage] = useState("null")
  const [flag,setFlag] = useState("false")
  const [num2,setNum2] = useState(40)

  const handleLeft = ()=>{
    setNum2(num2+1)
    setFlag("false")


}

const handleRight = ()=>{
  setNum2(num2+1)
  setFlag("true")

}


useEffect(() => {


  setMessage("num2 value is: "+ num2)
 

}, [flag]);


const navbarMessage = "this is a navbar"
const navbarNum = "35"
  return (
    <>
      <NavBar navbarMessage = {navbarMessage} navbarNum={navbarNum} />

      {/* <div style={{display:flag==="true"?"block":"none"}}>{message}</div>
      
      <div>{num2}</div>
      <div>{flag}</div>


      <button onClick={()=>{handleLeft()}}>left</button>
      <button onClick={()=>{handleRight()}}>right</button> */}

<form action="http://localhost:3000/" method='POST'>

  <label htmlFor="name">Name</label>
  <input type="text" name="name" placeholder='name' />
  <label htmlFor="Password">Password</label>
  <input type="password" name="password" placeholder='password' />
  <button type='submit'>SUBMIT</button>
</form>

    </>
  )
}

export default App


//add a task
//remove a task
//mark the task as done

//task element is a component 

