import MainPage from "./pages/MainPage";
import PaymentPage from "./pages/PaymentPage";
import NotFoundPage from "./pages/NotFoundPage";
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
