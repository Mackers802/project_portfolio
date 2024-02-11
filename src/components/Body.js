import React from 'react';
import Nav from './Nav.js';
import About from './About';
import Content from './Content';
import Footer from './Footer.js';

export default function Body() {
  return (
    <>
      <Nav /> 
      <div id="body">
        <About />
        <Content />
      </div>
      <Footer />
    </>
  )
}
