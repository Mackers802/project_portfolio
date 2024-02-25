import React from 'react';
import Navbar from '../components/Nav';
import Footer from '../components/Footer';
import Section from '../components/Section';
import Phone from '../components/Phone';
import Calculator from '../components/Calculator'; 

export default function Javascript() {
  return (
    <>
        <Navbar />
        <div id="javascript" className="page">
            <Section  props={{ title: 'Calculator', child: <Phone props={{ content: <Calculator />, horizontal: true, centered: true }} /> }} />
        </div>
        <Footer />
    </>
  )
}
