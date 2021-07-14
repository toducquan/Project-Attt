import React,  { useState } from 'react'
import Axios from "axios";
import { Redirect } from 'react-router';

export default function Signin(){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [data, setData] = useState()

    const handleSubmit = () =>{
        Axios.post("http://127.0.0.1:8000/api/login",{
            "email": email,
            "password": password
        }).then(res =>{
            setData(res.status)
            localStorage.setItem('jwt', res.data.jwt)
        }).catch(err => {
            console.log(err)
        })
    }
    if(data === 200) return <Redirect to="/user"></Redirect>
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <div className="p-3 mb-2 bg-dark text-white text-center fs-4">
                        Đăng nhập
                    </div>
                    <form method="POST">                          
                        <div class="form-group">
                            Tài khoản
                            <input type="text" name="username" class="form-control" maxlength="20" required id="id_username" onChange={e =>setEmail(e.target.value)}/>
                        </div>
                        
                    
                        <div class="form-group">
                            Mật khẩu
                            <input type="password" name="password" class="form-control" maxlength="20" required id="id_password" onChange={e =>setPassword(e.target.value)}/>
                        </div>
                            
                        
                        <p class="mt-1">Chưa có tài khoản?    <a class="pl-2"style={{textDecoration: "none"}} href="/signup">Đăng kí</a></p>
                        <input type="button" style={{margin: "83%"}} class="btn btn-dark mt-1" value="Đăng nhập" onClick ={() =>handleSubmit()}/>
                    </form>
                </div>
            </div>
        </div>
    )
}

