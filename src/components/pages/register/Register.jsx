
import React, { Component } from 'react';
import './Register.css';
import logo from '../../assets/logo/ass256.png';
export default class Register extends Component {

    render() {
        return (
            <div className="registerwrap">
                <img src={logo} alt="" />
                <form>
                    <div class="input">
                        <div class="field">
                            <input id="resemail" type="text" required />
                            <label for="resemail">Correo</label>
                        </div>
                    </div>
                    <div class="input">
                        <div class="field">
                            <input id="resuser" type="text" required />
                            <label for="resuser">Usuario</label>
                        </div>
                    </div>
                    <div class="input">
                        <div class="field">
                            <input id="respass" type="password" required />
                            <label for="respass">Contraseña</label>
                        </div>
                    </div>
                    <div class="input">
                        <div class="field">
                            <input id="resrepass" type="password" required />
                            <label for="resrepass">Contraseña</label>
                        </div>
                    </div>
                    <input type="file" name="" id="" />
                    <label className="checkbox" htmlFor="toc">
                        <input id="toc" type="checkbox" />
                        Acepto los terminos y cóndiciones
                    </label>
                    <input type="submit" value="Registrame!" />
                </form>
            </div>
        )
    }

}