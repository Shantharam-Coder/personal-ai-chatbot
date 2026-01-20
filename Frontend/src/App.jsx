import './App.css'
import  AuthPage from './Components/Authpage/AuthPage.jsx'
import LandingPage from './Components/LandingPage/LandingPage.jsx'
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {

  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<AuthPage />} />
              <Route
                  path="/landing"
                  element={
                      <ProtectedRoute>
                          <LandingPage />
                      </ProtectedRoute>
                  }
              />
          </Routes>
      </BrowserRouter>
  );
}

export default App
