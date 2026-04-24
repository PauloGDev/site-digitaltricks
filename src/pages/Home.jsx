import React from 'react';
import Hero from '../components/Hero';
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
import MascoteHome from '../components/home/MascoteHome';

const Home = () => {
  return (
    <div id="inicio" className="bg-black text-white overflow-hidden">
      <Hero />

      <main className="">
        <MascoteHome />
        <Apresentacao assets={assets} />
        <EcommercesHome />
        <Portfolio assets={assets} />
        <Sobre assets={assets} />
        <ServicosBeneficios assets={assets} />
        <Beneficios />
        <Abordagem />
      </main>

      <Contato />

      <div className="">
        <FAQ />
      </div>
    </div>
  );
};

export default Home;
