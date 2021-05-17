import React from 'react'
import '../../assets/styles/components/DatosAuto.scss'
import { usePersonContext } from '../../context'
import { IoChevronBackCircleOutline, IoChevronForward } from "react-icons/io5";
import { BiPlus, BiMinus } from "react-icons/bi";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import IconCar from '../../assets/static/icon_car.png'


export const DatosAuto = (props: any) => {
  const { person, handleCarData, carData } = usePersonContext()
  const [priceValue, setPriceValue] = useState(12500)
  const [value, setValue] = useState({
    year: 2019,
    brand:'Wolkswagen',
  })
  const handlePlus =() => {
    if (priceValue < 16500) {
      setPriceValue(priceValue + 100)
    }
  }
  const handleMin =() => {
    if (priceValue > 12500) {
      setPriceValue(priceValue - 100)
    }
  }
  const handleInput = (e:any) => {    
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e:any) => {
    e.preventDefault();
    handleCarData({...carData, year : value.year, brand: value.brand})
    props.handleNext()
  }
  return (
    <>
    <div className="datosAuto__container">
      <Link to='/'className="common__backbutton">
        <IoChevronBackCircleOutline size='24px'/>
        <span>Volver</span>
      </Link>
      <div className="datosAuto__main--container">
          <h1 className="datosAuto__info--title">¡Hola, <span className="datosAuto__info--name">{person.name && person.name.first}!</span></h1>
          <p className="datosAuto__info--subtitle">Completa los datos de tu auto</p>
          <form onSubmit={handleSubmit}>
            <div className="datosAuto__form--select-wrap">
              <label>Año</label>
              <select name="year" style={{width: '100%'}} onChange={handleInput}>
                <option value="2019">2019</option>
                <option value="2020">2020</option>
              </select>
            </div>
            <div className="datosAuto__form--select-wrap">
              <label>Marca</label>
              <select name="brand" style={{width: '100%'}} onChange={handleInput}>
                <option value="Wolkswagen">Wolkswagen</option>
                <option value="Toyota">Toyota</option>
              </select>
            </div>
            <div className='datosAuto__form--radioinput'>
              <p>¿Tu auto es a gas?</p>
              <div className='datosAuto__form--radioinput--wrap'>
                <div className="datosAuto__form--radioinput--radio">
                  <input type="radio" name='gas'id="yes" required/>
                  <label className="radio-label">Si</label>
                </div>
                <div className="datosAuto__form--radioinput--radio">
                  <input type="radio" name='gas' required/>
                  <label className="radio-label">No</label>
                </div>
              </div>
            </div>
            <div className="datosAuto__form--price-wrap">
              <div>
                <p className="datosAuto__form--price-title">Indica la suma asegurada</p>
                <p className="datosAuto__form--price-values">MIN $12,500 | MAX $16,500</p>
              </div>
              <div className="datosAuto__form--price-calculator">
                <BiMinus onClick={handleMin} color='#6F7DFF'/>
                <span>${(new Intl.NumberFormat().format(priceValue))}</span>
                <BiPlus onClick={handlePlus} color='#6F7DFF'/>
              </div>
            </div>
          <button className='common__button datosAuto__form--submit'>Continuar <IoChevronForward size='15px'/></button>
          </form>
      </div>
    </div>
    <div className="datosAuto__sidebar--container">
      <p className="datosAuto__sidebar--title">Ayuda</p>
      <div className="datosAuto__sidebar--content-wraper">
        <div className="datosAuto__sidebar--subtitle-wraper">
          <p>¿No encuentras el modelo ?</p>
          <a href="#">clic aquí</a>
        </div>
        <img src={IconCar} alt="icon-car" />
      </div>
    </div>
    </>
  )
}
