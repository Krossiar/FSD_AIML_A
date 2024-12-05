import {Link} from 'react-router-dom'
const Home=()=>{
    return(
        <div>
            <h1>Home Page</h1>
            <ul>
                <li><Link to="/counter">Coounter App</Link></li>
                <li><Link to="/stopwatch">Stop Watch App</Link></li>
                <li><Link to="/refex">Use Refex</Link></li>
                
            </ul>
        </div>
    )
}
export default Home;