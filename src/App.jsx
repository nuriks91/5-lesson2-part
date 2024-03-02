import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home, Main } from './Components/pages'
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
  return (
    <Router>
        <Routes>
            <Route element={<Main/>} path='/'/>
            <Route element={<Home/>} path='/'/>
        </Routes>
    </Router>
  )
}

export default App