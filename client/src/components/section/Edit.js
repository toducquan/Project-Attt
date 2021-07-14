import React, { useState, useEffect } from 'react'
import Axios from "axios";


export default function Edit(props) {
    const [content, setContent] = useState()
    const [mess, setMess] = useState()

    const handleUpload = () => {
        Axios.post("http://127.0.0.1:8000/api/edit", {
            "title": props.title,
            "content": content
        }).then(res => window.location.reload())
    }

    return (
        <div>
            <h5 className="bg-success text-white" style={{ padding: "10px" }}>Chỉnh sửa</h5>
            <div className="form-group" style={{ margin: "0px 0px 10px" }}>
                <label>Tiêu đề:</label>
                <input type="text" className="form-control" value={props.title} ></input>
            </div>
            <div className="form-group" style={{ margin: "0px 0px 10px" }}>
                <label>Nội dung:</label>
                <textarea type="text" className="form-control" placeholder="Nhập nội dung" rows="8" onChange={(e) => setContent(e.target.value)}></textarea>
            </div>
            <button type="submit" className="btn btn-success" onClick={() => handleUpload()}>Lưu</button>
        </div>
    )
}