import React from 'react'
import './navbar.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageSquareDetail} from 'react-icons/bi'
import { useState } from 'react'

const Navbar = () => {
  const [activeNav,setActiveNav] = useState('#')
  
  return (
    <nav>
      <a href='#' onClick={()=> setActiveNav('#')} className={activeNav === '#' ? 'active': ''} rel="noreferrer"><AiOutlineHome /></a>
      <a href='#about' onClick={()=> setActiveNav('#about')} className={activeNav === '#about' ? 'active': ''} rel="noreferrer"><AiOutlineUser /></a>
      <a href='#experience' onClick={()=> setActiveNav('#experience')} className={activeNav === '#experience' ? 'active': ''}><BiBook /></a>
      <a href='#services' onClick={()=> setActiveNav('#services')} className={activeNav === '#services' ? 'active': ''} rel="noreferrer"><RiServiceLine /></a>
      <a href='#contact' onClick={()=> setActiveNav('#contact')} className={activeNav === '#contact' ? 'active': ''} rel="noreferrer"><BiMessageSquareDetail /></a>
    </nav>
  )
}

export default Navbar
