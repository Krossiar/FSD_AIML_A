import {Link} from 'react-rounter-dom'
const Home=()=>{
    return(
        <div>
            <h1>Home Page</h1>
            <ul>
                <li><Link to="/counter">Coounter App</Link></li>
                <li><Link to="/stopwatch">Stop Watch App</Link></li>
            </ul>
        </div>
    )
}
export default Home;