import React, { useState, useEffect } from 'react'

export default function ViewCmt(props) {
    const handleUpload = () => {
        props.returnCMT()
    }

    return (
        <div>
            <div className="form-group" style={{ margin: "0px 0px 10px" }}>
                <label>Tác giả:</label>
                <input type="text" className="form-control" value={props.name} ></input>
            </div>
            <div className="form-group" style={{ margin: "0px 0px 10px" }}>
                <label>Tiêu đề:</label>
                <input type="text" className="form-control" value={props.title} ></input>
            </div>
            <div className="form-group" style={{ margin: "0px 0px 10px" }}>
                <label>Nội dung:</label>
                <textarea className="form-control" cols="40" rows="8">{props.content}</textarea>
            </div>
            <button type="submit" className="btn btn-success" onClick={() => handleUpload()}>Thoát</button>
        </div>
    )
}