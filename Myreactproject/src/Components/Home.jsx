import React from "react";
import { Link, Outlet } from "react-router-dom";
import Header from './Header'
import '../App.css'
function Home() {
    return (
        <div>
            <Header />
            <nav>
                <ul>
                    <li>
                        <Link to="/login">Login </Link>
                    </li>
                    <li>
                        <Link to="/register">Register Here</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
            <Footer />
        </div>
    );
}