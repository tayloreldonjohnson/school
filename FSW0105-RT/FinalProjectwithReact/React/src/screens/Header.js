import React, {Component} from 'react';
import Navbar from '../components/Navbar';

//const About = () => <Navbar title="About"/>;
let pathname = window.location.pathname

class Header extends React.Component {
    render(){
        return(
            <Navbar title={pathname}/>
        )
    }
}

export default Header;