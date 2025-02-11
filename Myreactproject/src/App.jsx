import React from "react"
import {Routes,Route} from 'react-router-dom'
import Home from './Components/Home'
import Login from './Components/Login'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/dashboard" element={<h1>Dashboard Page</h1>}></Route>
        <Route path="/logout" element={<h1>Logout Page</h1>}></Route>
        <Route path="*" element={<h1>No Page Available</h1>}></Route>
      </Routes>
    </div>
  )
}

export default App
