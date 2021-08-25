import React, { Component } from 'react'
import '../styles/App.css'
import '../styles/Contact.css'
import gmail from '../images/gmail.png'
import linkedin from'../images/linkedin.png'
import github from '../images/github.png'

export default class Contact extends Component {
    render() {
        return (
            <div className="canvas">
                <h2 className="initial-text">Encuentrame vía:</h2>
                <div className="card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <h3>e-mail</h3>
                            <img className="imageG" src={gmail} alt=""/>
                        </div>
                        <div className="flip-card-back">
                            <img className="imageG" src={gmail} alt=""/>
                            <br/>
                            <a className="links" href="https://gmail.com" target="_blank" rel="noreferrer"><b>rizzolozanomartin@gmail.com</b></a>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <h3>linkedin</h3>
                            <img className="image" src={linkedin} alt=""/>
                        </div>
                        <div className="flip-card-back">
                            <img className="image" src={linkedin} alt=""/>
                            <br/>
                            <a className="links" href="https://www.linkedin.com/in/mart%C3%ADn-rizzo-lozano-07909521b/" target="_blank" rel="noreferrer"><b>Martín Rizzo Lozano</b></a>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <h3>github</h3>
                            <img className="image" src={github} alt=""/>
                        </div>
                        <div className="flip-card-back">
                            <img className="image" src={github} alt=""/>
                            <br/>
                            <a className="links" href="https://github.com/rizzoMartin" target="_blank" rel="noreferrer"><b>rizzoMartin</b></a>
                        </div>
                    </div>
                </div>
                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                <h4>
                    Los enlaces se encuentran en los nombres de usuario detrás de las cartas
                </h4>
            </div>
        )
    }
}
