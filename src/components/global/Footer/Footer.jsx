
import React, { Component } from 'react';
import './Footer.css';
import { Link } from 'react-router-dom'
import logo from '../../assets/logo/WA1000x1000.png'
export default class Footer extends Component {

    render() {
        return (
            <footer>
                <div className="logoname">
                    <img src={logo} alt="" />
                </div>
                <div className="lowerfooter">
                    <div className="menu">
                        <ul>
                            <li> <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/wannaanime"><i className="fab fa-twitter"></i>Twitter</a> </li>
                            <li> <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/wannaanime"><i className="fab fa-facebook"></i>Facebook</a> </li>
                            <li> <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/wannaanime"><i className="fab fa-youtube"></i>Youtube</a> </li>
                            <li> <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/wannaanime"><i className="fab fa-discord"></i>Discord</a> </li>
                        </ul>
                    </div>

                    <div className="menu">
                        <ul>
                            <li>Ningún vídeo se encuentra alojado en nuestros servidores.</li>
                            <li><Link to="/tac">Términos y condiciones</Link></li>
                            <li><Link to="/privacy">Política de Privacidad</Link></li>
                            <li><Link to="/legacy">Legal</Link></li>
                        </ul>
                    </div>
                </div>
            </footer>
        )
    }

}