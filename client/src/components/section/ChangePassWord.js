import React, { useState, useEffect } from 'react'

export default function ChangePassWord(props){
    return (
        <div className="form-group" style={{ margin: "0px 0px 10px" }}>
            <label style={{ margin: "0px 0px 10px" }}>Mật khẩu cũ:</label>
            <input type="password" className="form-control" placeholder="" rows="2" style={{ margin: "0px 0px 10px" }}></input>
            <label style={{ margin: "0px 0px 10px" }}>Mật khẩu mới:</label>
            <input type="password" className="form-control" placeholder="" rows="2" style={{ margin: "0px 0px 10px" }}></input>
            <label style={{ margin: "0px 0px 10px" }}>Nhập lại mật khẩu:</label>
            <input type="password" className="form-control" placeholder="" rows="2" style={{ margin: "0px 0px 10px" }}></input>
            <button type="submit" className="btn btn-success" onClick = {() => props.changeStatus()}>Lưu thay đổi</button>
        </div>
    )
}