import React, { useState } from 'react'
import { IoChevronDown, IoChevronUp } from "react-icons/io5";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";

export const Togller = (props:any) => {
  const {cobertura, handleAdd, handleSubs} = props
  const [added, setAdded] = useState(false)
  const [show, setShow] = useState(false)
  
  const handleAddToCart = () => {
    console.log(cobertura.amount);
    
    handleAdd(cobertura.amount)
    setAdded(true)
  }

  const handleRemoveFromCart = () => {
    handleSubs(cobertura.amount)
    setAdded(false)
  }
  
  return (
  <div key={cobertura.title} className='armaplan__cobertura--group'>
    <div className='armaplan__cobertura--title-container'>
      <div className='armaplan__cobertura--labels'>
        <img src={cobertura.img} alt="coberturaimg" />
        <h3 className="armaplan__coberturas--title">{cobertura.title}</h3>
      </div>
      {
      !show 
      ? <IoChevronDown onClick={() => setShow(true)} size="15px" color="#EF3340"/>
      : <IoChevronUp  onClick={() => setShow(false)} size="15px" color="#EF3340"/>
      }
    </div>
    <button className="armaplan__coberturas--button" onClick={!added ? handleAddToCart : handleRemoveFromCart}>
      {!added 
      ? <><AiOutlinePlusCircle size='24px'/>Agregar</> 
      : <><AiOutlineMinusCircle size='24px'/>Quitar</>}
    </button>
    {
      show &&
      <p className="armaplan__coberturas--description">{cobertura.description}</p>
    }
  </div>
  )
}