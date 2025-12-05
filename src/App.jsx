import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Subscription from "./pages/Subscription";
import QRPayment from "./pages/QRPayment";
import AppStore from "./pages/AppStore";
import Services from "./pages/Services";

import Header from "./components/Header";
import BottomNav from "./components/BottomNav";

export default function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900">
      <BrowserRouter>
        <div className="w-full max-w-sm h-[90vh] max-h-[780px] flex flex-col bg-slate-950 rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.6)] border border-slate-800 overflow-hidden">
          <Header />
          <div className="flex-1 overflow-y-auto">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/subscription" element={<Subscription />} />
              <Route path="/payment" element={<QRPayment />} />
              <Route path="/apps" element={<AppStore />} />
              <Route path="/services" element={<Services />} />
            </Routes>
          </div>
          <BottomNav />
        </div>
      </BrowserRouter>
    </div>
  );
}

