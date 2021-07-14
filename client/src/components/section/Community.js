import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import { Link } from 'react-router-dom'
import '../css/Personal.css'
import Key from './Key'
import ViewCmt from './ViewCmt'


export default function Community(props) {

    const [data, setData] = useState()
    const [status, setStatus] = useState(0)
    const [name, setName] = useState()
    const [title, setTitle] = useState()
    const [content, setContent] = useState()


    useEffect(() => loadData(), [])

    const loadData = () => {
        Axios.post("http://127.0.0.1:8000/api/all", {
            "name": props.id
        }).then((response) => {
            setData(response.data)
        }).catch(err => {
            console.log(err)
        })
    }

    const changeStatus = () =>{
        setStatus(2)
    }
    const returnCMT = () =>{
        setStatus(0)
    }
    const handleView = (name, title, content) =>{
        setName(name)
        setTitle(title)
        setContent(content)
        setStatus(1)
    }

    return (
        <div>
            {
                status === 0 && (
                    <div className="personal ">
                        <h5 style={{ padding: "10px" }}>Được chia sẻ với tôi</h5>

                        {
                            data && data.map(item => {
                                return (
                                    <div className="doc bg-success">
                                        <div className="title">
                                            {item.title}
                                        </div>
                                        <div className="options" style={{ margin: "0px 30px" }}>
                                            <svg xmlns="http://www.w3.org/2000/svg" onClick = {() =>handleView(item.name, item.title, item.content)} width="16" height="16" fill="currentColor" class="bi bi-menu-up" viewBox="0 0 16 16">
                                                <path d="M7.646 15.854a.5.5 0 0 0 .708 0L10.207 14H14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3.793l1.853 1.854zM1 9V6h14v3H1zm14 1v2a1 1 0 0 1-1 1h-3.793a1 1 0 0 0-.707.293l-1.5 1.5-1.5-1.5A1 1 0 0 0 5.793 13H2a1 1 0 0 1-1-1v-2h14zm0-5H1V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v2zM2 11.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 0-1h-8a.5.5 0 0 0-.5.5zm0-4a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 0-1h-11a.5.5 0 0 0-.5.5zm0-4a.5.5 0 0 0 .5.5h6a.5.5 0 0 0 0-1h-6a.5.5 0 0 0-.5.5z" />
                                            </svg>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                )
            }
            {
                status === 1 && <Key changeStatus= {changeStatus}></Key>
            }
            {
                status === 2 && <ViewCmt name = {name} title = {title} content = {content} returnCMT = {returnCMT}></ViewCmt>
            }

        </div>
    )
}