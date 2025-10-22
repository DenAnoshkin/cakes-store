import MainPage from "./pages/mainPage";
import PaymentPage from "./pages/paymentPage";
import NotFoundPage from "./pages/notFoundPage";
import "./index.css";
import { Route, Routes } from "react-router";

function App() {
  return (
    <>
      <Routes>
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/" element={<MainPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
