import React from 'react'
import '../../assets/styles/components/Header.scss'
import LogoRimac from '../../assets/static/RIMAC.png'
import {IoCall} from "react-icons/io5"
export const Header = () => {
  return (
    <div className='header__container'>
      <img src={LogoRimac} alt='logoRimac' className='header__image'/>
      <div className='header__info--container'>
        <p>¿Tienes alguna duda?</p>
        <div className='header__call--container'>
          <IoCall />
          <p>(01) 411 6001</p>
        </div>
      </div>
    </div>
  )
}
