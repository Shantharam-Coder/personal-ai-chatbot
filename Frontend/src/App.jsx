import './App.css'
import  AuthPage from './Components/Authpage/AuthPage.jsx'
import LandingPage from './Components/LandingPage/LandingPage.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {

  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<AuthPage />} />
              <Route path="/landing" element={<LandingPage />} />
          </Routes>
      </BrowserRouter>
  );
}

export default App
