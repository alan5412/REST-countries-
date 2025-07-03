import Header from "./Components/Header"
import { Routes, Route } from "react-router-dom"
import Home from "./Pages/Home"
import { BrowserRouter } from 'react-router-dom'
import CountryDetail from "./Pages/Country"

function App() {
  

  return (
    <>
    <BrowserRouter basename="/REST-countries-/" >
    <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/country/:code" element={<CountryDetail />} />
      </Routes>
    </BrowserRouter>
    </>
    
  )
}

export default App
