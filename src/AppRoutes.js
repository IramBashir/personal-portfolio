// src/AppRoutes.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import NotFound from './components/NotFound';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={`${process.env.PUBLIC_URL}/`} element={<Home />} />
      <Route path={`${process.env.PUBLIC_URL}/about`} element={<About />} />
      <Route path={`${process.env.PUBLIC_URL}/projects`} element={<Projects />} />
      <Route path={`${process.env.PUBLIC_URL}/contact`} element={<Contact />} />
      <Route path={`${process.env.PUBLIC_URL}/*`} element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
