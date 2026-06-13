import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './Components/Homepage'

function App() {

  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
