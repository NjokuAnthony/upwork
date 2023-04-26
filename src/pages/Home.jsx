import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import {useState} from 'react'

const Home = () => {
const [name, setName] = useState("Njoku Chibuzor")
const [job, setJob] = useState("web developer")
const [count, setCounter] = useState(0)


const changeName = () => {
  setName("Anthony Obi")
  setJob("data analyst")

}

// const counter = () => {
//   setCounter(20)
// }

return (
    <div>
      <Navbar />
        <h1>This is my Home Page</h1>
        <p>my name is {name}, i am a {job}</p>
        <button onClick={changeName}>Click Me</button>


        <h1>Count: {count}</h1>
        <button onClick={() => {setCounter(count + 1)}} className='btn btn-primary w-2 m-1'>increase</button> 
        <button onClick={() => {setCounter(count - 1)}}  className='btn btn-danger w-2 m-1'>reduce</button>
        <button onClick={() => {setCounter(count * 0)}}  className='btn btn-secondary w-4'>reset</button>

      <Footer/> 
    </div>
  )
}

export default Home