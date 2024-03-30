import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'


function HeaderSocials() {
  return (
    <div className='header__socials'>
      <a href='https://www.linkedin.com/in/abdul-rafay-zia-697517247' target='_blank' rel="noreferrer"><BsLinkedin /></a>
      <a href='https://github.com/AbdulRafayZia' target='_blank' rel="noreferrer"><FaGithub /></a>
      <a href='https://www.instagram.com/abdul_rafay_zia/' target='_blank' rel="noreferrer"><FiInstagram /></a>
    </div>
  )
}

export default HeaderSocials
