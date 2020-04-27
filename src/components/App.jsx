import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Header from './global/Header/Header';
import Footer from './global/Footer/Footer';
import './fontawesome/css/all.css';
class App extends Component {

    componentWillMount = () => {

        var theme = localStorage.getItem("theme");

        if (theme === "white") {
            document.documentElement.style.setProperty('--current-background', "white");
            document.documentElement.style.setProperty('--current-background-contrast', "rgba(221, 221, 221, 0.534)");
            document.documentElement.style.setProperty('--current-background-contrast-hover', "#ddd");
            document.documentElement.style.setProperty('--current-text-color', "#676767c4");
            document.documentElement.style.setProperty('--current-text-opacity-color', "#6767678f");
            document.documentElement.style.setProperty('--current-text-color-hover', "#353535c4");
            document.documentElement.style.setProperty('--current-text-color-active', "#676767");
            document.documentElement.style.setProperty('--current-border-color', "gainsboro");
            document.documentElement.style.setProperty('--current-regular-text', "#272727");
        } else if(theme === "black"){
            document.documentElement.style.setProperty('--current-background', "#191919");
            document.documentElement.style.setProperty('--current-background-contrast', "#100f0fc4");
            document.documentElement.style.setProperty('--current-background-contrast-hover', "#100f0f");
            document.documentElement.style.setProperty('--current-text-color', "#c1c1c18f");
            document.documentElement.style.setProperty('--current-text-opacity-color', "#6767678f");
            document.documentElement.style.setProperty('--current-text-color-hover', "#c1c1c1c4");
            document.documentElement.style.setProperty('--current-text-color-active', "#676767");
            document.documentElement.style.setProperty('--current-border-color', "#100f0f");
            document.documentElement.style.setProperty('--current-regular-text', "white");
        }else{
            localStorage.setItem("theme", "white")
        }

    }
   

    render() {
        return (
            <React.Fragment>
                <Header></Header>
                {this.props.children}
                <Footer></Footer>
            </React.Fragment>
        )
    }
}


export default withRouter(App)