import React, { useState, useEffect } from 'react'
import Axios from "axios";
import { Link } from 'react-router-dom'
import { Redirect } from 'react-router';

export default function Add(props) {

    const [title, setTitle] = useState()
    const [content, setContent] = useState()
    const [key, setKey] = useState()
    const [mess, setMess] = useState()

    const handleUpload = () => {
        Axios.post("http://127.0.0.1:8000/api/upload", {
            "title": title,
            "content": content,
            "key": key,
            "name": props.id
        }).then(res => setMess(res.data.messs))
    }
    if (mess === "save") return <Redirect to="/user"></Redirect>
    return (
        <div>
            <div className="form-group" style={{ margin: "0px 0px 10px" }}>
                <label>Tiêu đề:</label>
                <input type="text" className="form-control" placeholder="Nhập tiêu đề" rows="2" onChange={(e) => setTitle(e.target.value)}></input>
            </div>
            <div className="form-group" style={{ margin: "0px 0px 10px" }}>
                <label>Nội dung:</label>
                <textarea className="form-control" cols="40" placeholder="Nhập nội dung" rows="8" onChange={(e) => setContent(e.target.value)}></textarea>
            </div>
            <div className="form-group" style={{ margin: "0px 0px 10px" }}>
                <label>Khóa:</label>
                <input type="password" className="form-control" placeholder="Nhập khóa" rows="1" onChange={(e) => setKey(e.target.value)}></input>
            </div>
            <div className="form-group" style={{ margin: "0px 0px 10px" }}>
                <label>Chia sẻ với:</label>
                <select class="form-control">
                    <option>ToDucQuan</option>
                    <option>DaoDuyKien</option>
                    <option>Abcd</option>
                    <option>Defg</option>
                </select>
            </div>
            <button type="submit" className="btn btn-success" onClick={() => handleUpload()}>Tải lên</button>
        </div>
    )
}