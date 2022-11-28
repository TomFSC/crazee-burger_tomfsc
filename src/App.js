import "./App.css"
import LoginPage from "./components/pages/Login/LoginPage"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import OrderPage from "./components/pages/Order/OrderPage"
import ErrorPage from "./components/pages/Error/ErrorPage"

function App() {
   return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/order/:firstName" element={<OrderPage />} />
            <Route path="*" element={<ErrorPage />} />
         </Routes>
      </BrowserRouter>
   )
}

export default App
