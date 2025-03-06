import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import ViewUsers from './pages/ViewUsers'

const App = () => {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>}>
        <Route path="/viewUsers" element={<ViewUsers/>}></Route>
        </Route>
        <Route path="*" element={<h1>404 Error</h1>}></Route>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
