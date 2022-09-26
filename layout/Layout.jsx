import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <div className='overflow-x-hidden'>{children}</div>
      <Footer />
    </>
  );
}
