import React from "react";
import {Route, Routes} from "react-router-dom";
import QRScanner from "./components/qr/QRScanner.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import BillingPage from "./pages/main/BillingPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import AdminPage from "./pages/main/AdminPage.jsx";
import ManagerPage from "./pages/main/ManagerPage.jsx";
import SellerPage from "./pages/main/SellerPage.jsx";
import ClientPage from "./pages/main/ClientPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import LogoutPage from "./pages/LogoutPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import ResetPasswordPage from "./pages/ResetPasswordPage.jsx";
import VerifyEmailPage from "./pages/VerifyEmailPage.jsx";

function AppRoutes() {
  return (
      <Routes>
            <Route path="/" element={<HomePage />}>
                <Route path="admin" element={<AdminPage />} />
                <Route path="manager" element={<ManagerPage/>} />
                <Route path="billing" element={<BillingPage/>} />
                <Route path="seller" element={<SellerPage/>} />
                <Route path="client" element={<ClientPage/>} />
            </Route>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/logout" element={<LogoutPage />} />
          <Route path="/qr" element={<QRScanner />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/reset-password" element={<ResetPasswordPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/verify-email" element={<VerifyEmailPage />} />
          <Route path="*" element={<NotFoundPage />} />
      </Routes>
  );
}

export default AppRoutes;
