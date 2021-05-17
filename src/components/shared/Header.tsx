import React from 'react'
import '../../assets/styles/components/Header.scss'
import LogoRimac from '../../assets/static/RIMAC.png'
import classNames from 'classnames';
import {IoCall} from "react-icons/io5"
export const Header = (props:any) => {
  const { isHome } = props;
  const headerStyle = classNames('header__container', {
    isHome,
  });
  return (
    <div className={headerStyle}>
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
