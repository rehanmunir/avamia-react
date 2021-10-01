import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ showHeader, showFooter, children }) => {

  return (
    <div className="main">
      {showHeader && <Header />}
      {children}
      {showFooter && <Footer />}
    </div>
  );
};

export default Layout;