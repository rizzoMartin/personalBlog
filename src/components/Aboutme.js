import React, { Component } from 'react'
import '../styles/App.css'

export default class Aboutme extends Component {
    render() {
        return (
            <div className="row">
                <div className="column">
                    <h2>Conóceme</h2>
                    <p>Soy Martín Rizzo Lozano, estudiante de Ingeniería Informática y Administración y Dirección de Empresas en la Universidad de Alicante.</p>
                    <br/>
                    <p>
                        Actualmente estoy en Ámsterdam estudiando un Erasmus+ en materias de Big Data en la universidad Hogeschool van Amsterdam (Amsterdam University of Applied Sciences), con la finalidad de aprender diferentes metodólogías de estudio, abrirme a más campos de mi carrera y conocer la experiencia de vivir en otro país con gente de diferentes lugares del mundo y convivir en otro idioma.
                    </p>
                </div>
                <div className="column">
                    <p>Estoy realizando esta web para empezar a utilizar reactjs y mostrar los diferentes pryectos que tengo así como facilitar mi currículum y permitir que quien lo desee se ponga en contacto conmigo.</p>
                    <br/>
                    <p>A día de hoy he realizado diferentes proyectos sencillos con el fin de conocer diferentes lenguajes de programacón y aprender acerca de diferentes ámbitos de la informática.</p>
                    <br />
                    <p>Algunos de estos proyectos los podréis encontrar en mi cuenta de github y otros en caso de que contactéis conmigo mediante el apartado de contacto.</p>
                </div>
            </div>
        )
    }
}