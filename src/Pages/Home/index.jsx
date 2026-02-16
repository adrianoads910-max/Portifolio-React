import React from 'react';
import About from '../../Components/About';
import Experience from '../../Components/Experience';
import Stacks from '../../Components/Stacks';
import Projects from '../../Components/Projects';
import Footer from '../../Components/Footer';


export const Home = () => {
  return (
    <main>
      <About />
      <Experience />
      <Stacks />
      <Projects />
      <Footer />
    </main>
  );
};
export default Home;