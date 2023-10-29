import React from 'react';
import './App.css';
import Header from './components/header2/Header';
import Home from './components/home2/Home';
import About from './components/about2/About';
import Skills from './components/skills2/Skills';
import Services from './components/services2/Services';
import Qualification from './components/qualifications2/Qualification';
import Testimonials from './components/testimonials2/Testimonials';
import Contact from './components/contact2/Contact';
import Footer from './components/footer2/Footer';
import ScrollUp from './components/scrollup2/ScrollUp';

function App() {
  return (
    <>
      <Header></Header>
      <main className="main">
        <Home></Home>
        <About></About>
        <Skills></Skills>
        <Services></Services>
        <Qualification></Qualification>
        <Testimonials></Testimonials>
        <Contact></Contact>
      </main>

      <Footer></Footer>
      <ScrollUp></ScrollUp>
    </>
  );
}

export default App;
