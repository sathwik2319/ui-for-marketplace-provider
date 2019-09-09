import React,{Component} from 'react';
import './NavBar.css'
import Sidebar from './SideBar';
import {Link} from 'react-router-dom';

export default class NavBar2 extends Component{
    render()
    {
        return(
            <div className="main-layout length">
            <nav className="black"> 
                <div className="nav-wrapper">
                <Sidebar/>
                <a href='/' className="brand-logo text-deco ">Verizon-MarketPlace</a>
                <ul className="right hide-on-med-and-down">
                    <li className="onhover"><Link to= '/about'>About</Link></li>
                    <li className="onhover"><Link to= '/provider'>Become a provider..</Link></li>
                    <li>
                        <Link className="wave-effects black" to='/profile'>
                         Profile
                        </Link>
                    </li>
                    <li className="onhover"><a href='#'>Logout</a></li>
                </ul>
                </div>
            </nav>
            </div>
        );
    }
}   