import React, { useState, useEffect } from 'react'
import { Route } from 'react-router-dom'
import Personal from './Personal'
import Setting from './Setting'
import Community from './Community'
import Add from './Add'
import Edit from './Edit'
import Signin from './Signin'
import '../css/Options.css'


export default function Options(props) {
    return (
        <section className="option">
            <Route path="/user" component={() => <Personal id={props.id} />} exact></Route>
            <Route path="/cmt" component={() => <Community id={props.id} />} exact></Route>
            <Route path="/setting" component={Setting} exact></Route>
            <Route path="/add" component={() => <Add id={props.id} />} exact></Route>
        </section>
    )
}