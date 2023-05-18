import React from "react";
import {Route, Routes} from "react-router-dom";
import AboutPage from "./pages/AboutPage.jsx";
import WhatsAppPage from "./pages/home/admin/WhatsAppPage.jsx";
import BillingPage from "./pages/home/billing/BillingPage.jsx";
import CreateClient from "./pages/home/billing/CreateClient.jsx";
import UserPage from "./pages/home/client/UserPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import HomePage from "./pages/home/HomePage.jsx";
import AdminPage from "./pages/home/admin/AdminPage.jsx";
import ManagerPage from "./pages/home/manager/ManagerPage.jsx";
import SellerPage from "./pages/home/seller/SellerPage.jsx";
import ClientPage from "./pages/home/client/ClientPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import LogoutPage from "./pages/LogoutPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import ResetPasswordPage from "./pages/ResetPasswordPage.jsx";
import ItemPage from "./pages/home/admin/ItemPage";
import CategoryPage from "./pages/home/admin/CategoryPage";
import SkuPage from "./pages/home/admin/SkuPage";
import StockPage from "./pages/home/admin/StockPage";
import UsersPage from "./pages/home/admin/UsersPage";
import SellerClientPage from "./pages/home/seller/SellerClientPage";
import BillingClientPage from "./pages/home/billing/BillingClientPage";

function AppRoutes() {
  return (
      <Routes>
            <Route path="/" element={<HomePage />}>
                <Route path="admin" element={<AdminPage />} />
                <Route path="admin/whatsapp" element={<WhatsAppPage />} />
                <Route path="admin/category" element={<CategoryPage />} />
                <Route path="admin/item" element={<ItemPage />} />
                <Route path="admin/sku" element={<SkuPage />} />
                <Route path="admin/stock" element={<StockPage />} />
                <Route path="admin/users" element={<UsersPage />} />
                <Route path="manager" element={<ManagerPage/>} />
                <Route path="billing" element={<BillingPage/>} />
                <Route path="billing/create" element={<CreateClient/>} />
                <Route path="billing/client" element={<BillingClientPage/>} />
                <Route path="seller" element={<SellerPage/>} />
                <Route path="seller/client" element={<SellerClientPage/>} />
                <Route path="client" element={<ClientPage/>} />
                <Route path="user" element={<UserPage />} />
            </Route>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/logout" element={<LogoutPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/reset-password" element={<ResetPasswordPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<NotFoundPage />} />
      </Routes>
  );
}

export default AppRoutes;
