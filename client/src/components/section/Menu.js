import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../css/Menu.css'

export default function Menu(){
    return (
        <div className = "menu">
            <Link to="/user" style={{textDecoration: "none"}}><div className="item">Cá nhân</div></Link>
            <Link to="/cmt" style={{textDecoration: "none"}}><div className="item">Cộng đồng</div></Link> 
            <Link to="/setting" style={{textDecoration: "none"}}><div className="item">Cài đặt</div></Link>
            <Link to="/signin" style={{textDecoration: "none"}}><div className="item">Đăng xuất</div></Link>
        </div>
    )
}