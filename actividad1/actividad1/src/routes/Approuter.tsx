// AppRouter.tsx

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../componentes/layout/Layout";
import LoginPage from "../pages/auth/LoginPage";
import RegisterPage from "../pages/auth/RegisterPage";
import HomePage from "../pages/home/HomePage";
import StorePage from "../pages/store/StorePage";
import SubscriptionsPage from "../pages/subscripcion/SubscriptionsPage";
import SupportPage from "../pages/support/SupportPage";

const AppRouter = () => (
  <BrowserRouter>
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/store" element={<StorePage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/subscriptions" element={<SubscriptionsPage />} />
      </Routes>
    </Layout>
  </BrowserRouter>
);

export default AppRouter;
