import React from 'react'
import {redirect, Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import NavBar from './components/NavbBar'
import Footer from './components/Footer'
import { ToastContainer, toast } from 'react-toastify';
import Website from './pages/Website'
import Design from './pages/Design'
import ScrollToTop from './context/ScrollToTop'
import FadeAnimate from './context/FadeAnimate'
import Error404 from './pages/Error404'
import Badapple from './pages/badapple'
import ScrollProgressBar from './components/ScrollProgressBar'
import EcommerceVendas from './components/websites/EcommerceVendas'

const App = () => {
  const path = window.location.pathname;
  console.log(path)
  return (
    <div className='bg-[#121212]'>  
      <div className=''>
      <ToastContainer/>
      <ScrollToTop/>
      <FadeAnimate/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/sobre' element={<About/>}/>
        <Route path='/websites' element={<Website/>}/>
        <Route path='/ecommerce' element={<EcommerceVendas/>}/>
        <Route path='/design' element={<Design/>}/>
        <Route path='/badapple' element={<Badapple/>}/>
        <Route path='*' element={<Error404/>} />
      </Routes>
        </div>

        <>
        {
      path != '/badapple' ? <nav class="fixed w-full top-0 left-0 z-50"><NavBar /></nav> : <div></div>
        }
        </>
      
      <>
        {
      path != '/badapple' ? <div className='w-full'><Footer/></div> : <div></div>
        }
        </>
      
        
    </div>
  )
}

export default App