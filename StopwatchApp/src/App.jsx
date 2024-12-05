import { Route, Routes } from 'react-router-dom'
import Counter from './Components/Counter';
import Stopwatch from './Components/Stopwatch'
import Home from './Components/Home'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/counter" element={<Counter/>}/>
      <Route path="/stopwatch" element={<Stopwatch/>}/>
      <Route path="*" element={<h1>404 Page Not Found</h1>}/>
    </Routes>
  )
}

export default App
