import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import '../styles/Header.css'

export default class Header extends Component {
    render() {
        return (
            <div className="canvas">
                <h1>MRL</h1>
                <div className="Menu">
                    <Link className="Menu-item" to="/"><b>Acerca de</b></Link>
                    <Link className="Menu-item" to="/curriculum"><b>Curriculum</b></Link>
                    <Link className="Menu-item" to="/contact"><b>Contacto</b></Link>
                </div>
            </div>
        )
    }
}
