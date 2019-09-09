import React,{Component} from 'react';
import {Link} from 'react-router-dom';

export default class CommonBar extends Component{
    render()
    {
        return(
            <div className="main-layout length">
            <nav className="black"> 
                <div className="nav-wrapper">
                <Link to="/" className="brand-logo text-deco">Verizon-MarketPlace</Link>
                </div>
                </nav>
                </div>
        );
    }
}