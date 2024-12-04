import {Routes,Route} from 'react-rounter-dom'
import Home from './Components/Home'
const App=()=>{
  return(
    <div>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/counter" element={<h1>Counter App</h1>}></Route>
        <Route path="/stopwatch" element={<h1>Stopwatch App</h1>}></Route>
        <Route path="*" element={<h1>No Page Available</h1>}></Route>
      </Routes>
    </div>
  )
}
export default App