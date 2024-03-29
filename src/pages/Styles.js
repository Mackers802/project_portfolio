import React from 'react';
import Navbar from '../components/Nav';
import Footer from '../components/Footer';
import Section from '../components/Section';
import Buttons from '../components/Buttons';

export default function Styles() {
  return (
    <>
        <Navbar />
            <div id="styles" className="page">
                <Section  props={{ title: 'Buttons', child: <Buttons /> }} />
            </div>
        <Footer />
    </>
  )
}
