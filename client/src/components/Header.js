import React, {Component} from 'react'
import './css/Header.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

class Header extends Component{
    render(){
        
        return(
            <header>
                <div className="logo">
                    <h1><Link to="/">MyShare</Link></h1>
                </div>
                <nav>
                    <ul>
                        <li><Link to="/">Chức năng</Link></li>
                        <li><Link to="/">About us</Link></li>
                        <li><Link to="/">Điều khoản</Link></li>
                        <li><Link to="/">Dịch vụ</Link></li>
                        <li><Link to="/signin">Đăng nhập</Link></li>
                    </ul>
                </nav>
            </header>
        );
    }
}

export default Header;