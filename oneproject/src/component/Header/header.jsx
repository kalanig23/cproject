import React, { Component } from 'react'
import '../Header/header.css';

export default class header extends Component {
    render() {
        return (
            <div>
                <div className="header-main">
               <div className="header-left">
                   <img className="logo" src={require('../../image/logo.png')} ></img>
               </div>
               <div className="header-right">
                   <img className="photo" src={require('../../image/photo.png')}></img>
                   <p className="name">Nandana Chakraborty <span className="specialist">Specialist</span></p>
               </div>
            </div>
            </div>
        )
    }
}
