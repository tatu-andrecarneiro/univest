import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Layout from '@/components/Layout';
import LoginPage from '@/pages/LoginPage';
import HomePage from '@/pages/HomePage';
import OpenFinancePage from '@/pages/OpenFinancePage';
import SettingsPage from '@/pages/SettingsPage';
import DashboardPage from '@/pages/DashboardPage';

const LOGO_URL = "../img/logo-removebg-preview.png";

function App() {
  const location = useLocation();

  return (
    <Layout logoUrl={LOGO_URL}>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<LoginPage logoUrl={LOGO_URL} />} />
          <Route path="/home" element={<HomePage logoUrl={LOGO_URL} />} />
          <Route path="/open-finance" element={<OpenFinancePage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
        </Routes>
      </AnimatePresence>
    </Layout>
  );
}

export default App;