import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"

const App = () => {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>}>
        <Route path="/viewUsers" element={<h1>Users List</h1>}></Route>
        </Route>
        <Route path="*" element={<h1>404 Error</h1>}></Route>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
