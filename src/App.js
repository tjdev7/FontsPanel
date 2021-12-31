import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'

import HomePage from './components/HomePage'

import Font1 from './components/Font1'
import Font2 from './components/Font2'
import Font3 from './components/Font3'
import Font4 from './components/Font4'
import Font5 from './components/Font5'
import Font6 from './components/Font6'
import Font7 from './components/Font7'

import './App.css'

function App() {
    return (
        <div className="App">
            <header>
                <BrowserRouter>
                    <ul>
                        <Link to="/HomePage">
                            <li className="FontTabs">FontsPanel</li>
                        </Link>

                        <Link to="/Font1">
                            <li className="FontTabs">Michroma</li>
                        </Link>
                        <Link to="/Font2">
                            <li className="FontTabs">Pushster</li>
                        </Link>

                        <Link to="/Font3">
                            <li className="FontTabs">Orbitron</li>
                        </Link>

                        <Link to="/Font4">
                            <li className="FontTabs">Comfortaa</li>
                        </Link>
                        <Link to="/Font5">
                            <li className="FontTabs">Rajdhani</li>
                        </Link>
                        <Link to="/Font6">
                            <li className="FontTabs">Quicksand</li>
                        </Link>
                        <Link to="/Font7">
                            <li className="FontTabs">Poiret One</li>
                        </Link>
                    </ul>

                    <Routes>
                        <Route path="/HomePage" element={<HomePage />} />
                        <Route path="/Font1" element={<Font1 />} />
                        <Route path="/Font2" element={<Font2 />} />

                        <Route path="/Font3" element={<Font3 />} />
                        <Route path="/Font4" element={<Font4 />} />

                        <Route path="/Font5" element={<Font5 />} />

                        <Route path="/Font6" element={<Font6 />} />

                        <Route path="/Font7" element={<Font7 />} />
                    </Routes>
                </BrowserRouter>
            </header>
        </div>
    )
}

export default App
