
import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom'
import './Header.css';
import wa from '../../assets/logo/WA256x256.png'
import $ from 'jquery'
export default class Header extends Component {

    componentDidMount = () => {
        var theme = localStorage.getItem("theme");
        if (theme === "white") {
            document.getElementById("myonoffswitch").checked = false
            document.documentElement.style.setProperty('--current-background', "white");
            document.documentElement.style.setProperty('--current-background-contrast', "rgba(221, 221, 221, 0.534)");
            document.documentElement.style.setProperty('--current-background-contrast-hover', "#ddd");
            document.documentElement.style.setProperty('--current-text-color', "#676767c4");
            document.documentElement.style.setProperty('--current-text-opacity-color', "#6767678f");
            document.documentElement.style.setProperty('--current-text-color-hover', "#353535c4");
            document.documentElement.style.setProperty('--current-text-color-active', "#676767");
            document.documentElement.style.setProperty('--current-border-color', "gainsboro");
            document.documentElement.style.setProperty('--current-regular-text', "#272727");
        } else {
            document.getElementById("myonoffswitch").checked = true
            document.documentElement.style.setProperty('--current-background', "#191919");
            document.documentElement.style.setProperty('--current-background-contrast', "#100f0fc4");
            document.documentElement.style.setProperty('--current-background-contrast-hover', "#100f0f");
            document.documentElement.style.setProperty('--current-text-color', "#c1c1c18f");
            document.documentElement.style.setProperty('--current-text-opacity-color', "#6767678f");
            document.documentElement.style.setProperty('--current-text-color-hover', "#c1c1c1c4");
            document.documentElement.style.setProperty('--current-text-color-active', "#676767");
            document.documentElement.style.setProperty('--current-border-color', "#100f0f");
            document.documentElement.style.setProperty('--current-regular-text', "white");
        }

    }


    showLogin = (e) => {
        var target = e.target.parentElement;
        if (target.classList.contains("hidden")) {
            target.classList.remove("hidden")
        } else {
            target.classList.add("hidden")
        }
    }

    changeTheme = (e) => {
        var target = e.target;
        console.log(target.checked);
        if (!target.checked) {
            localStorage.setItem("theme", "white")
            document.documentElement.style.setProperty('--current-background', "white");
            document.documentElement.style.setProperty('--current-background-contrast', "rgba(221, 221, 221, 0.534)");
            document.documentElement.style.setProperty('--current-background-contrast-hover', "#ddd");
            document.documentElement.style.setProperty('--current-text-color', "#676767c4");
            document.documentElement.style.setProperty('--current-text-opacity-color', "#6767678f");
            document.documentElement.style.setProperty('--current-text-color-hover', "#353535c4");
            document.documentElement.style.setProperty('--current-text-color-active', "#676767");
            document.documentElement.style.setProperty('--current-border-color', "gainsboro");
            document.documentElement.style.setProperty('--current-regular-text', "#272727");
        } else {
            localStorage.setItem("theme", "black")
            document.documentElement.style.setProperty('--current-background', "#191919");
            document.documentElement.style.setProperty('--current-background-contrast', "#100f0fc4");
            document.documentElement.style.setProperty('--current-background-contrast-hover', "#100f0f");
            document.documentElement.style.setProperty('--current-text-color', "#c1c1c18f");
            document.documentElement.style.setProperty('--current-text-opacity-color', "#6767678f");
            document.documentElement.style.setProperty('--current-text-color-hover', "#c1c1c1c4");
            document.documentElement.style.setProperty('--current-text-color-active', "#676767");
            document.documentElement.style.setProperty('--current-border-color', "#100f0f");
            document.documentElement.style.setProperty('--current-regular-text', "white");
        }


    }

    render() {
        return (
            <header >
                <div className="upperHeader">
                    <NavLink exact to="/" activeClassName="logoin" className="logo">
                        <img src={wa} alt="" />
                    </NavLink>
                    <form className="searchbar">
                        <input type="text" placeholder="Nya Nya!" />
                        <a className="fas fa-search"></a>
                    </form>

                    <div className="onoffswitch">
                        <input type="checkbox" name="onoffswitch" className="onoffswitch-checkbox" id="myonoffswitch" onClick={this.changeTheme} />
                        <label className="onoffswitch-label" htmlFor="myonoffswitch">     <span className="onoffswitch-inner"></span>
                            <span className="onoffswitch-switch"></span>
                        </label>
                    </div>
                    <div className="user">
                        <Link to="/signup">Registrarse</Link>
                        <div id="signindropdown" className="dropdown hidden">
                            <a onClick={this.showLogin}>Entrar</a>
                            <div className="dropcontent">
                                <form>
                                    <div className="group">
                                        <input type="text" required />
                                        <label>Correo</label>
                                    </div>
                                    <div className="group">
                                        <input type="password" required />
                                        <label>Contraseña</label>
                                    </div>
                                    <div className="dropfooter">
                                        <label className="checkbox" htmlFor="rmb"><input type="checkbox" id="rmb" />Recúerdame</label>
                                        <Link to="/forgotpassword">Olvidé mi contraseña</Link>
                                    </div>
                                    <input type="submit" value="Entrar" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <nav className="lowerHeader">
                    <ul>
                        <li><NavLink exact activeClassName="in" to="/">inicio</NavLink></li>
                        <li><NavLink exact activeClassName="in" to="/season">temporada</NavLink></li>
                        <li><NavLink exact activeClassName="in" to="/trendy">trends</NavLink></li>
                        <li><NavLink exact activeClassName="in" to="/manga">manga</NavLink></li>
                        <li><NavLink exact activeClassName="in" to="/wallpapers">wallpapers</NavLink></li>
                    </ul>
                </nav>
            </header>
        )
    }

}