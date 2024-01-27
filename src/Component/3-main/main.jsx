import React from 'react'
import  './main.css'
export default function Main() {
  return (
    <>
      <main className='flex'>
        <section className='left'>
        <div className='allBtn flex'>
          <div>
              <button className='active btnPrj  '>all project</button>
          </div>

          <div>
              <button className='btnPrj'>html & css</button>
          </div>
          <div >
              <button className='btnPrj'>javascript</button>
          </div>
          <div>
              <button className='btnPrj'>react</button>
          </div>
          <div>
              <button className='btnPrj'>laravel</button>
          </div> 
        </div>  
        
        </section>

          
        <section className='right flex'>
          <article className='card'>
            <div className='image'><img  src="./public/profil.jpg" alt="" /></div>
            <h1 className='title'>titre project</h1>
            <p className='paragraphe'>
              dddddddddddddddddddddddd
              fffffffffffffffffffffffff
              ggggggggggggggggggggggg
              hhhhhhhhhhhhhhhhh
            </p>
          </article>
          <article className='card'>
            <div className='image'><img  src="./public/profil.jpg" alt="" /></div>
            <h1 className='title'>titre project</h1>
            <p className='paragraphe'>
              dddddddddddddddddddddddd
              fffffffffffffffffffffffff
              ggggggggggggggggggggggg
              hhhhhhhhhhhhhhhhh
            </p>
          </article>
          <article className='card'>
            <div className='image'><img  src="./public/profil.jpg" alt="" /></div>
            <h1 className='title'>titre project</h1>
            <p className='paragraphe'>
              dddddddddddddddddddddddd
              fffffffffffffffffffffffff
              ggggggggggggggggggggggg
              hhhhhhhhhhhhhhhhh
            </p>
          </article>
          <article className='card'>
            <div className='image'><img  src="./public/profil.jpg" alt="" /></div>
            <h1 className='title'>titre project</h1>
            <p className='paragraphe'>
              dddddddddddddddddddddddd
              fffffffffffffffffffffffff
              ggggggggggggggggggggggg
              hhhhhhhhhhhhhhhhh
            </p>
          </article>
        </section>
      </main>
      <div className='header-border'/>
    </>
  )
}
