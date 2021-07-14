import React, { useState, useEffect } from 'react'

export default function BlockList(props){
    return (
        <div className="form-group" style={{ margin: "0px 0px 10px" }}>
            <h5 style={{ margin: "0px 0px 10px" }}>Người dùng bị chặn sẽ không thể chia sẻ tài liệu với bạn</h5>
            <input type="text" className="form-control" placeholder="Nhập tên người dùng" rows="2" style={{ margin: "0px 0px 10px" }}></input>
            <button type="submit" className="btn btn-success" onClick = {() => props.changeStatus()}>Chặn</button>
        </div>
    )
}