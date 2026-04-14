import React from 'react';
import Hero from '../components/Hero';
import OurPolicy from '../components/OurPolicy';
import { assets } from '../assets/assets';
import Abordagem from '../components/home/Abordagem';
import Sobre from '../components/home/Sobre';
import Apresentacao from '../components/home/Apresentacao';
import Beneficios from '../components/home/Beneficios';
import Contato from '../components/home/Contato';
import FAQ from '../components/home/Faq';
import Portfolio from '../components/home/Portfolio';
import ServicosBeneficios from '../components/home/ServicosBeneficios';
import EcommercesHome from '../components/home/EcommercesHome';

const Home = () => {
  return (
    <div id="inicio">
      <Hero />
      <div className="px-3 sm:px-[5vw] md:px-[2vw] lg:px-[9vw]">
        <Apresentacao assets={assets} />
        <EcommercesHome/>
        <Portfolio assets={assets} />
        <Sobre assets={assets} />
        <ServicosBeneficios assets={assets} />
        <Abordagem assets={assets} />
      </div>
      <Contato />
      <div className="px-3 sm:px-[5vw] md:px-[2vw] lg:px-[9vw]">
        <FAQ />
      </div>
    </div>
  );
};

export default Home;
