import React, { useState, useEffect } from 'react'
import Axios from "axios";
import { Redirect } from 'react-router';
import Menu from './Menu';
import Options from './Options';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

export default function User() {
    const [id, setId] = useState()
    useEffect(() => {
        
        Axios.post("http://127.0.0.1:8000/api/user", {
            "jwt": localStorage.getItem('jwt')
        }).then((response) => {
            setId(response.data.name)
        }).catch(err =>{
            console.log(err)
        })
    }, [])
    console.log("id ==", id)
    
    return (
        <div>
            <Router>
                <h4 style={{padding: "0px 20px"}}>Welcome {id}!</h4>
                <Menu/> 
                <Options id={id}/>
            </Router>
        </div>
    )
}


