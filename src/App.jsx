import React from 'react'
import Header from './Component/1-header/header'
import Hero from './Component/2-hero/hero'
import Main from './Component/3-main/main'
import Contact from './Component/4-contact/contact'
import Footer from './Component/5-footer/footer'

export default function App() {
  return (
    <>
         <div className='container'>
            <Header />
            <Hero />
            <Main />
            <Contact />
            <Footer />
        </div>
    </>
  )
}
