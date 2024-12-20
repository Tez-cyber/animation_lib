import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Contact } from './pages/Contact'
import { Products } from './pages/Products'
import "./App.css"
import { AnimatePresence } from 'framer-motion'


function App() {
    const location = useLocation()
    return (
        <>
            <Navbar />
            <AnimatePresence mode='wait'>
                <Routes location={location} key={location.pathname}>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/products' element={<Products />} />
                </Routes>
            </AnimatePresence>
        </>
    )
}

export default App
