import React from 'react'
import './hero.css'
export default function Hero() {
  return (
    <>
      <section className='hero flex '>

        <article className='profil flex '>
          <div className='divP'><img className='moi' src="./public/profil.jpg" alt="" /></div>
          <div className='divP'><h1>Full Stack Developper</h1></div>
          <div className='divP'><p>Hello, I'm Anas Meftah, a skilled Full Stack Developer with a passion for crafting robust and user-friendly web applications. With expertise in both front-end and back-end technologies, I am adept at handling the entire development process from start to finish.</p></div>
          <div className='divP '>
            <div className='icons flex'>
              <div className='icon-x icon'></div>
              <div className='icon-github icon'></div>
              <div className='icon-instagram icon'></div>
              <div className='icon-linkedin-square icon'></div>
              </div>
          </div>
        </article>


        <article className='animation '>
          Animation
        </article>

      </section>
      <div className='header-border'/>
    </>
  )
}
