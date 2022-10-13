import "./App.css"
import LoginPage from "./components/pages/login/LoginPage"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import OrderPage from "./components/pages/order/OrderPage"

function App() {
   return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/order" element={<OrderPage />} />
         </Routes>
      </BrowserRouter>
   )
}

export default App
