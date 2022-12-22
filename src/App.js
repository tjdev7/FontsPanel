import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

import HomePage from './components/HomePage'

import Font1Tab from './components/Font1Tab'
import Font2Tab from './components/Font2Tab'
import Font3Tab from './components/Font3Tab'
import Font4Tab from './components/Font4Tab'
import Font5Tab from './components/Font5Tab'
import Font6Tab from './components/Font6Tab'
import Font7Tab from './components/Font7Tab'

import './App.css'

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <div id="menuDiv">
                    <div id="mainMenu">
                        <ul>
                            <li className="AppTitle">
                                <a href="">FontsPanel</a>
                            </li>

                            <li>
                                <span>
                                    Fonts <i class="arrow"></i>
                                </span>
                                <ul class="dropdown right0">
                                    <Link to="/Homepage">
                                        <li>
                                            <a href="">Home</a>
                                        </li>
                                    </Link>

                                    <li>
                                        <a
                                            href="https://github.com/Toughee/FontsPanel"
                                            target="_blank"
                                        >
                                            README
                                        </a>
                                    </li>

                                    <Link to="/Font1Tab">
                                        <li>
                                            <a href="#">Michroma</a>
                                        </li>
                                    </Link>
                                    <Link to="/Font2Tab">
                                        <li>
                                            <a href="">Kdam Thmor Pro</a>
                                        </li>
                                    </Link>
                                    <Link to="/Font3Tab">
                                        <li>
                                            <a href="">Orbitron</a>
                                        </li>
                                    </Link>
                                    <Link to="/Font4Tab">
                                        <li>
                                            <a href="">Comfortaa</a>
                                        </li>
                                    </Link>
                                    <Link to="/Font5Tab">
                                        <li>
                                            <a href="">Rajdhani</a>
                                        </li>
                                    </Link>
                                    <Link to="/Font6Tab">
                                        <li>
                                            <a href="">Quicksand</a>
                                        </li>
                                    </Link>
                                    <Link to="/Font7Tab">
                                        <li>
                                            <a href="">Poiret One</a>
                                        </li>
                                    </Link>
                                    <li></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>

                <Routes>
                    <Route path="/HomePage" element={<HomePage />} />
                    <Route path="/Font1Tab" element={<Font1Tab />} />
                    <Route path="/Font2Tab" element={<Font2Tab />} />

                    <Route path="/Font3Tab" element={<Font3Tab />} />
                    <Route path="/Font4Tab" element={<Font4Tab />} />

                    <Route path="/Font5Tab" element={<Font5Tab />} />

                    <Route path="/Font6Tab" element={<Font6Tab />} />

                    <Route path="/Font7Tab" element={<Font7Tab />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App;
