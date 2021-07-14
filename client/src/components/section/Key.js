import React, { useState, useEffect } from 'react'

export default function Key(props) {


    return (
        <div className="form-group" style={{ margin: "0px 0px 10px" }}>
            <label>Nhập khóa:</label>
            <input type="password" className="form-control" placeholder="" rows="2" style={{ margin: "0px 0px 10px" }}></input>
            <button type="submit" className="btn btn-success" onClick = {() => props.changeStatus()}>Truy cập</button>
        </div>
    )
}