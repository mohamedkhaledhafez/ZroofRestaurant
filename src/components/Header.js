import React, { Component } from 'react';
import './Header.css'
import img from './logo.png'

class Header extends Component {

    render() {

        return(
            <div className="header">
                <a href="#" className="title">حلويات ظروف</a>
                <div className="logo">
                    <img src={img} alt="mo" style= {{ width:"104px", height:"64px"}}/>
                </div>
            </div>
        )
    }

}

export default Header;