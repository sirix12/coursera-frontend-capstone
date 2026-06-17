import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './Components/Homepage'
import BookingPage from './Components/BookingPage'
import ConfirmedBooking from './Components/ConfirmedBooking'
import { useReducer } from 'react'

function reducer(state, action) {
  switch (action.type) {
    case "DELETE_ITEM":
      return state.filter((item) => item !== action.id);
    case "ADD_ITEM":
      return [...state, action.item];
    default:
      return state;
  }
}
const today = new Date()

async function initializeTimes() {
  const data = fetchAPI(today)
  return data
}


function App() {
  const [availableTimes, dispatch] = useReducer(reducer, initializeTimes())
  const setAvailableTimes = (action) => {
    if (action.type === "UPDATE_TIMES") {
      dispatch({ type: "DELETE_ITEM", id: action.id })
    }
  }



  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/booking" element={<BookingPage availableTimes={availableTimes} setAvailableTimes={setAvailableTimes} />} />
          <Route path="/booking/confirmed" element={<ConfirmedBooking />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
