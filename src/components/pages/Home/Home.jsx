
import React, { Component } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import $ from 'jquery';
export default class Home extends Component {

    getAllUrlParams = (url) => {

        // get query string from url (optional) or window
        var queryString = url ? url.split('?')[1] : window.location.search.slice(1);

        // we'll store the parameters here
        var obj = {};

        // if query string exists
        if (queryString) {

            // stuff after # is not part of query string, so get rid of it
            queryString = queryString.split('#')[0];

            // split our query string into its component parts
            var arr = queryString.split('&');

            for (var i = 0; i < arr.length; i++) {
                // separate the keys and the values
                var a = arr[i].split('=');

                // set parameter name and value (use 'true' if empty)
                var paramName = a[0];
                var paramValue = typeof (a[1]) === 'undefined' ? true : a[1];

                // (optional) keep case consistent
                paramName = paramName.toLowerCase();
                if (typeof paramValue === 'string') paramValue = paramValue.toLowerCase();

                // if the paramName ends with square brackets, e.g. colors[] or colors[2]
                if (paramName.match(/\[(\d+)?\]$/)) {

                    // create key if it doesn't exist
                    var key = paramName.replace(/\[(\d+)?\]/, '');
                    if (!obj[key]) obj[key] = [];

                    // if it's an indexed array e.g. colors[2]
                    if (paramName.match(/\[\d+\]$/)) {
                        // get the index value and add the entry at the appropriate position
                        var index = /\[(\d+)\]/.exec(paramName)[1];
                        obj[key][index] = paramValue;
                    } else {
                        // otherwise add the value to the end of the array
                        obj[key].push(paramValue);
                    }
                } else {
                    // we're dealing with a string
                    if (!obj[paramName]) {
                        // if it doesn't exist, create property
                        obj[paramName] = paramValue;
                    } else if (obj[paramName] && typeof obj[paramName] === 'string') {
                        // if property does exist and it's a string, convert it to an array
                        obj[paramName] = [obj[paramName]];
                        obj[paramName].push(paramValue);
                    } else {
                        // otherwise add the property
                        obj[paramName].push(paramValue);
                    }
                }
            }
        }

        return obj;
    }

    componentDidMount = () => {
        $('input[type="radio"]').click(function () {
            console.log("hola");

            var $radio = $(this);

            // if this was previously checked
            if ($radio.data('waschecked') == true) {
                $radio.prop('checked', false);
                $radio.data('waschecked', false);
            }
            else
                $radio.data('waschecked', true);

            // remove was checked from other radios
            $radio.siblings('input[type="radio"]').data('waschecked', false);
        });
    }

    render() {
        return (
            <div className="home">
                <div className="newswrap">
                    <div className="news">
                        <div className="newcontent">
                            <img src="https://cdn.superaficionados.com/imagenes/dr-stone-sera-transmitido-por-crunchyroll-og.jpg" alt="" />
                            <h3>DrStone Episodio 8</h3>
                            <h4>Senku intentará ganarse a la gente de la aldea con el poder de la ciencia, pero antes de eso deberá conseguir algún logro que esa gente pueda considerar como algo positivo</h4>
                        </div>
                    </div>
                </div>
                <div className="animewrap">
                    <div className="category">
                        <h3><i className="fas fa-hashtag"></i>Tipos</h3>
                        <ul>
                            <li><Link to="/?category=animes">animes</Link></li>
                            <li><Link to="/?category=ovas">ovas</Link></li>
                            <li><Link to="/?category=peliculas">peliculas</Link></li>
                            <li><Link to="/?category=mangas">mangas</Link></li>
                        </ul>
                        <h3><i className="fas fa-hashtag"></i>Categorias</h3>
                        <input type="radio" name="estado" id="estado" />
                        <input type="radio" name="genero" id="genero" />
                        <ul>
                            <li><label htmlFor="estado">Estado <i className="fas fa-tv"></i></label>
                                <ul>
                                    <li><Link to="/?category=emision">En emisión</Link></li>
                                    <li><Link to="/?category=finalizado">Finalizado</Link></li>
                                    <li><Link to="/?category=proximamente">Próximamente</Link></li>
                                </ul>
                            </li>
                            <li><label htmlFor="genero">Genero <i className="fas fa-layer-group"></i></label>
                                <ul>
                                    <li><Link to="/?category=accion">Acción</Link></li>
                                    <li><Link to="/?category=aventuras">Aventuras</Link></li>
                                    <li><Link to="/?category=carreras">Carreras</Link></li>
                                    <li><Link to="/?category=cienciaficcion">Ciencia Ficción</Link></li>
                                    <li><Link to="/?category=comedia">Comedia</Link></li>
                                    <li><Link to="/?category=demonios">Demonios</Link></li>
                                    <li><Link to="/?category=deportes">Deportes</Link></li>
                                    <li><Link to="/?category=drama">Drama</Link></li>
                                    <li><Link to="/?category=ecchi">Ecchi</Link></li>
                                    <li><Link to="/?category=escolares">Escolares</Link></li>
                                    <li><Link to="/?category=fantasia">Fantasia</Link></li>
                                    <li><Link to="/?category=harem">Harem</Link></li>
                                    <li><Link to="/?category=infantil">Infantil</Link></li>
                                    <li><Link to="/?category=juegos">Juegos</Link></li>
                                    <li><Link to="/?category=magia">Magia</Link></li>
                                    <li><Link to="/?category=militar">Militar</Link></li>
                                    <li><Link to="/?category=misterio">Misterio</Link></li>
                                    <li><Link to="/?category=musica">Música</Link></li>
                                    <li><Link to="/?category=parodia">Parodia</Link></li>
                                    <li><Link to="/?category=policia">Policía</Link></li>
                                    <li><Link to="/?category=psicologico">Psicológico</Link></li>
                                    <li><Link to="/?category=romance">Romance</Link></li>
                                    <li><Link to="/?category=seinen">Seinen</Link></li>
                                    <li><Link to="/?category=shoujo">Shoujo</Link></li>
                                    <li><Link to="/?category=shounen">Shounen</Link></li>
                                    <li><Link to="/?category=sobrenatural">Sobrenatural</Link></li>
                                    <li><Link to="/?category=superpoderes">Superpoderes</Link></li>
                                    <li><Link to="/?category=suspenso">Suspenso</Link></li>
                                    <li><Link to="/?category=terror">Terror</Link></li>
                                    <li><Link to="/?category=yuri">Yuri</Link></li>
                                    <li><Link to="/?category=yaoi">Yaoi</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className="animewrapper">
                        <div className="anime card new">
                            <img src="https://img1.ak.crunchyroll.com/i/spire1/fec464366218935900a0c02bc3a0a32a1559098068_full.jpg" alt="" />
                            <h3>DrStone</h3>
                            <Link to="/anime/aa"></Link>
                            <label class="collection">
                                <input type="checkbox" />
                                <div>
                                    <span></span>
                                </div>
                            </label>
                        </div>
                        <div className="anime card new">
                            <img src="https://img1.ak.crunchyroll.com/i/spire1/fec464366218935900a0c02bc3a0a32a1559098068_full.jpg" alt="" />
                            <span>Anime</span>
                            <h3>DrStone</h3>
                            <Link to="/anime/aa"></Link>
                        </div>
                        <div className="ova card">
                            <img src="https://vignette.wikia.nocookie.net/sao/images/e/e3/Sword_Art_Online_anime.png/revision/latest?cb=20151025183427&path-prefix=es" alt="" />
                            <h3>Sword Art Online</h3>
                            <Link to="/anime/aa"></Link>
                            <label class="collection">
                                <input type="checkbox" />
                                <div>
                                    <span></span>
                                </div>
                            </label>
                        </div>
                        <div className="ova card">
                            <img src="https://vignette.wikia.nocookie.net/sao/images/e/e3/Sword_Art_Online_anime.png/revision/latest?cb=20151025183427&path-prefix=es" alt="" />
                            <span>OVA</span>
                            <h3>Sword Art Online</h3>
                            <Link to="/anime/aa"></Link>
                        </div>
                        <div className="movie card">
                            <img src="https://animeflv.net/uploads/animes/covers/2543.jpg" alt="" />
                            <span>Pelicula</span>
                            <h3>Your Name</h3>
                            <Link to="/movie/a"></Link>
                        </div>
                        <div className="movie card">
                            <img src="https://animeflv.net/uploads/animes/covers/2543.jpg" alt="" />
                            <span>Pelicula</span>
                            <h3>Your Name</h3>
                            <Link to="/movie/a"></Link>
                        </div>
                        <div className="movie card">
                            <img src="https://animeflv.net/uploads/animes/covers/2543.jpg" alt="" />
                            <span>Pelicula</span>
                            <h3>Your Name</h3>
                            <Link to="/movie/a"></Link>
                        </div>
                        <div className="manga card">
                            <img src="http://ramenparados.com/wp-content/uploads/2015/11/El-genial-aunque-poco-conocido-manga-One-Punch-Man-tendra-su-anime-11-1000x600.jpg" alt="" />
                            <span>Manga</span>
                            <h3>One Punch Man</h3>
                            <Link to="/manga/ss"></Link>
                        </div>
                        <div className="manga card">
                            <img src="http://ramenparados.com/wp-content/uploads/2015/11/El-genial-aunque-poco-conocido-manga-One-Punch-Man-tendra-su-anime-11-1000x600.jpg" alt="" />
                            <span>Manga</span>
                            <h3>One Punch Man</h3>
                            <Link to="/manga/ss"></Link>
                        </div>
                        <div className="manga card">
                            <img src="http://ramenparados.com/wp-content/uploads/2015/11/El-genial-aunque-poco-conocido-manga-One-Punch-Man-tendra-su-anime-11-1000x600.jpg" alt="" />
                            <span>Manga</span>
                            <h3>One Punch Man</h3>
                            <Link to="/manga/ss"></Link>
                        </div>
                        <div className="manga card">
                            <img src="http://ramenparados.com/wp-content/uploads/2015/11/El-genial-aunque-poco-conocido-manga-One-Punch-Man-tendra-su-anime-11-1000x600.jpg" alt="" />
                            <span>Manga</span>
                            <h3>One Punch Man</h3>
                            <Link to="/manga/ss"></Link>
                        </div>

                    </div>
                </div>
            </div>
        )
    }

}