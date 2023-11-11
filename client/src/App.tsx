import { BrowserRouter, Route, Routes } from "react-router-dom"
import LandingPage from "./pages/LandingPage/LandingPage"
import "./index.css"
import MainPage from "./pages/MainPage/MainPage"

function App() {  

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path="/main" element={<MainPage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
