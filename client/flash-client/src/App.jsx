import "./App.css";
import { Home } from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PaymentPage } from "./pages/PaymentPage";
import { DownloadPage } from "./pages/DownloadPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pay_in_flash" element={<PaymentPage />} />
          <Route path="/download_app" element={<DownloadPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
