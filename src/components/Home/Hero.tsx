import React from 'react'
import '../../assets/styles/components/Hero.scss'
import Clouds from '../../assets/static/clouds.png'
import Build from '../../assets/static/build.png'
import HeroImg from '../../assets/static/heroImg.png'
import Three from '../../assets/static/three.png'
export const Hero = () => {
  return (
    <div className="hero__container">
      <div className='hero__images--container'>
        <img src={Clouds} alt="clouds" className='hero__images--clouds'/>
        <img src={Build} alt="build" className='hero__images--build'/>
        <img src={Three} alt="three" className='hero__images--three'/>
        <img src={HeroImg} alt="heroimg" className='hero__images--main'/>

      </div>
      <div className='hero__info--container'>
        <div>
          <p>¡Nuevo!</p>
          <h1><span>Seguro</span> Vehicular <br/>Traking</h1>
          <p>Cuentanos donde le haras seguimiento a tu <br/>seguro</p>
        </div>
      </div>
    </div>
  )
}
