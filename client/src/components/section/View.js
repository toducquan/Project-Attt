import React, { useState, useEffect } from 'react'


export default function View(props) {

    const handleUpload = () => {
        window.location.reload()
    }

    return (
        <div>
            <div className="form-group" style={{ margin: "0px 0px 10px" }}>
                <label>Tiêu đề:</label>
                <input type="text" className="form-control" value={props.title} ></input>
            </div>
            <div className="form-group" style={{ margin: "0px 0px 10px" }}>
                <label>Nội dung:</label>
                <textarea type="text" className="form-control" value={props.content} rows="8"></textarea>
            </div>
            <button type="submit" className="btn btn-success" onClick={() => handleUpload()}>Thoát</button>
        </div>
    )
}