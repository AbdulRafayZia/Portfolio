import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' , marginBottom: '100px' }}>
          <img
            src={ME}
            loading='lazy'
            alt='Abdul Rafay Zia'
            // className='header-image'
            style={{
              width: '220px',
              height: '220px',
              objectFit: 'cover',
              borderRadius: '50%',
              border: '6px solid var(--color-primary)',
              boxShadow: '0 4px 24px rgba(0,0,0,0.15)'
            }}
          />
        </div>
        <h5>Hello I'm</h5>
        <h1>Abdul Rafay Zia</h1>
        <h5 className="text-light">Fullstack Engineer</h5>
        <CTA />
        <HeaderSocials />

       

        <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header
