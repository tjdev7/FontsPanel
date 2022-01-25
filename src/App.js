import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'

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
            <header>
                <BrowserRouter>
                    <ul>
                        <Link to="/HomePage">
                            <li className="FontTabs">
                                <strong>FontsPanel</strong>
                            </li>
                        </Link>

                        <Link to="/Font1Tab">
                            <li className="FontTabs">Michroma</li>
                        </Link>
                        <Link to="/Font2Tab">
                            <li className="FontTabs">Pushster</li>
                        </Link>

                        <Link to="/Font3Tab">
                            <li className="FontTabs">Orbitron</li>
                        </Link>

                        <Link to="/Font4Tab">
                            <li className="FontTabs">Comfortaa</li>
                        </Link>
                        <Link to="/Font5Tab">
                            <li className="FontTabs">Rajdhani</li>
                        </Link>
                        <Link to="/Font6Tab">
                            <li className="FontTabs">Quicksand</li>
                        </Link>
                        <Link to="/Font7Tab">
                            <li className="FontTabs">Poiret One</li>
                        </Link>
                    </ul>

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
            </header>
        </div>
    )
}

export default App
