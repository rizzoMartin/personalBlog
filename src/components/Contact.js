import React, { Component } from 'react'
import '../styles/App.css'
import '../styles/Contact.css'

export default class Contact extends Component {
    render() {
        return (
            <div className="canvas">
                <h2 className="initial-text">Encuentrame en</h2>
                <div className="card">
                    <h3>e-mail</h3>
                </div>
                <div className="card">
                    <h3>Linkedin</h3>
                </div>
                <div className="card">
                    <h3>GitHub</h3>
                </div>
            </div>
        )
    }
}
