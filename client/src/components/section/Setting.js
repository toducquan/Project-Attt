import React, { useState, useEffect } from 'react'
import ChangePassWord from './ChangePassWord'
import BlockList from './BlockList'

export default function Setting(){
    const [status, setStatus] = useState(0)

    const changeStatus = () =>{
        setStatus(0)
    }

    return (
        <div>
            {
                status == 0 && (
                    <div>
                        <button className="btn btn-success" style={{margin:"5px 5px"}} onClick ={() => setStatus(1)}>Đổi mật khẩu</button><br></br>
                        <button className="btn btn-success" style={{margin:"5px 5px"}} onClick ={() => setStatus(2)}>Danh sách chặn</button>
                    </div>
                )
            }
            {
                status == 1 && (
                    <ChangePassWord changeStatus = {changeStatus}></ChangePassWord>
                )
            }
            {
                status == 2 && (
                    <BlockList changeStatus = {changeStatus}></BlockList>
                )
            }
        </div>
    )
}