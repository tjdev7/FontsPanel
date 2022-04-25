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
            <BrowserRouter>
                <details>
                    <summary> FontsPanel</summary>
                    <p>
                        <strong>Home</strong>
                    </p>
                    <Link to="/Font1Tab">
                        <p className="FontTabs">Michroma</p>
                    </Link>

                    <Link to="/Font2Tab">
                        <p className="FontTabs">Pushster</p>
                    </Link>
                    <Link to="/Font3Tab">
                        <p className="FontTabs">Orbitron</p>
                    </Link>
                    <Link to="/Font4Tab">
                        <p className="FontTabs">Comfortaa</p>
                    </Link>
                    <Link to="/Font5Tab">
                        <p className="FontTabs">Rajdhani</p>
                    </Link>
                    <Link to="/Font6Tab">
                        <p className="FontTabs">Quicksand</p>
                    </Link>
                    <Link to="/Font7Tab">
                        <p className="FontTabs">Poiret One</p>
                    </Link>
                </details>

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

export default App
