import React from 'react'
import { createRoot } from 'react-dom/client'
import '../src/styles/index.css'

import Signup from './pages/userPages/Signup.jsx'
import { ToastContainer } from 'react-toastify'
import Navbar from './component/Navbar.jsx'
import { Provider } from "react-redux";
import { store } from './app/store.jsx'
import {slides} from './component/data.js'
import Footer from './component/Footer.jsx'
import Hero from './component/Hero.jsx'
import Home from './pages/userPages/Home.jsx'
createRoot(document.getElementById('root')).render(
  <Provider store={ store } >
    <div >
      <ToastContainer />
      <Navbar />
      <Hero />
      <Home data={slides} tital={"Slider 1"} />
      <Home  data={slides} tital={"Slider 2"}/>
      <Home data={slides}  tital={"Slider 3"}/>
      <Footer />
    </div>
  </Provider>

)
