import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import '../../assets/styles/components/HomeForm.scss'
import { usePersonContext } from '../../context'

export const HomeForm = () => {
  const [checked, setChecked] = useState(false)
  const [showTermsError, setShowTermsError] = useState(false)
  const { carData, handleCarData } = usePersonContext()
  const history = useHistory()
  const [value, setValue] = useState({
    document: '',
    phone: '',
    licence: '',
  })
  const handleTermsError = () => {
    if(checked === false) {
      setShowTermsError(true)
    }else {
      setShowTermsError(false)
    }
  }
  
  const handleInput = (e:any) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e:any) => {
    console.log('submit');
    
    e.preventDefault()
    if (checked === false) {
      setShowTermsError(true)
    }else {
      // TODO: route to next page     
      handleCarData(...carData, {licence : value.licence})
      history.push('/main')
    }
  }
  return (
    <div className="homeform__container">
      <form onSubmit={handleSubmit}>
      <h1>Déjanos tus datos</h1>
      <div className="commons__input--container homeform__input--group homeform__input--group-dni">
        <select name="document-type" className="commons__input homeform__input--select">
          <option value="dni">DNI</option>
          <option value="passport">Pasaporte</option>
        </select>
        <input 
          name='document'
          type="text" 
          placeholder='Nro. de doc' 
          className="commons__input homeform__input" 
          required maxLength={8} 
          minLength={8}
          pattern='([0-9][ -]*){8}'
          onChange={handleInput}/>
      </div>
      <div className="commons__input--container homeform__input--group" >
        <input 
        type="text" 
        name='phone'
        placeholder='Celular' 
        className="commons__input homeform__input" 
        required 
        maxLength={9} 
        minLength={9}
        pattern='(9)[ -]*([0-9][ -]*){8}'
        onChange={handleInput}/>
      </div>
      <div className="commons__input--container homeform__input--group">
        <input 
        type="text" 
        name='licence'
        placeholder='Placa' 
        className="commons__input homeform__input" 
        required maxLength={6} 
        minLength={6}
        pattern='([A-Z|a-z][ -]*){3}([0-9][ -]*){3}'
        onChange={handleInput}/>
      </div>
      <div className='homeform__input--politics'>
        <label className="homeform__input--label"><p>Acepto la <a href="/">Política de Protección de Datos <br/> Personales</a> y los <a href="/">Términos y Condiciones</a>.</p>
          <input type="checkbox" required checked={checked} onChange={()=>{setChecked(!checked)}}/>
          <span className="homeform__input--checkmark"></span>
        </label>
      </div>
      {
        showTermsError && 
        <p style={{color: 'red'}}>Por favor acepta los terminos y condiciones</p>
      }      
      <button type="submit" className='homeform__button--submit common__button' onClick={handleTermsError}>Cotízalo</button>
      </form>
    </div>
  )
}
