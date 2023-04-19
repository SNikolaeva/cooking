import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';
import Navbar from './UI/Navbar';
import HomePage from './Pages/HomePage';
import SignupPage from './Pages/SignupPage';
import LoginPage from './Pages/LoginPage';

export default function App({ user }) {
  return (
    <div className="container">
      <Navbar user={user} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
}
