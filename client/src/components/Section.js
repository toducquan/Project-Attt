import React , {Component} from 'react'
import './css/Section.css'
import {Route} from 'react-router-dom'
import Home from './section/Home'
import User from './section/User'
import Signin from './section/Signin'
import Signup from './section/Signup'
class Section extends Component{
    render(){
        return(
            <section>
                <Route path="/" component={Home} exact></Route>
                <Route path="/user" component={User} exact></Route>
                <Route path="/signin" component={Signin} exact></Route>
                <Route path="/signup" component={Signup} exact></Route>
            </section>
        );
    }
}
export default Section;