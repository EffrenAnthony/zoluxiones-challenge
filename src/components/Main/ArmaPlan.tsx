import '../../assets/styles/components/Armaplan.scss'
import { IoChevronBackCircleOutline } from "react-icons/io5";
import { BiCheck } from "react-icons/bi";
import ArmaPlanImg from '../../assets/static/armaplan.png'
import LlantaRobadaImg from '../../assets/static/llantarobada.png'
import ChoqueImg from '../../assets/static/choque.png'
import AtropelloImg from '../../assets/static/atropello.png'
import Seal from '../../assets/static/seal.png'
import { Togller } from './Toggler';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { usePersonContext } from '../../context';

export function ArmaPlan (props:any)  {
  const [total, setTotal] = useState(20)
  const { carData} = usePersonContext() 
  const [addons, setAddons] = useState([
    'Llanta de respuesto',
    'Analisis de motor',
    'Aros gratis'
  ])
  const coberturas:any = [
    {
      title:"Llanta robada",
      img: LlantaRobadaImg,
      amount: 15,
      description: "He salido de casa a las cuatro menos cinco para ir a la academia de ingles de mi pueblo (Sant Cugat, al lado de Barcelona) con mi bici, na llego a la academia que está en el centro del pueblo en una plaza medio-grande y dejo donde siempre la bici atada con una pitón a un sitio de esos de poner las bicisy mucho más"
    },
    {
      title:"Choque y/o pasarte la luz roja ",
      img: ChoqueImg,
      amount: 20,
      description: "He salido de casa a las cuatro menos cinco para ir a la academia de ingles de mi pueblo (Sant Cugat, al lado de Barcelona) con mi bici, na llego a la academia que está en el centro del pueblo en una plaza medio-grande y dejo donde siempre la bici atada con una pitón a un sitio de esos de poner las bicisy mucho más"
    },
    {
      title:"Atropello en la vía Evitamiento ",
      img: AtropelloImg,
      amount: 50,
      description: "He salido de casa a las cuatro menos cinco para ir a la academia de ingles de mi pueblo (Sant Cugat, al lado de Barcelona) con mi bici, na llego a la academia que está en el centro del pueblo en una plaza medio-grande y dejo donde siempre la bici atada con una pitón a un sitio de esos de poner las bicisy mucho más"
    },
  ]

  const controllers:any = [
    <p>Protege a <br/>tu auto</p>,
    <p>Protege a los <br/>que te rodean</p>,
    <p>Mejora tu <br/>plan</p>
  ]
  const handleAdd = (amount:any) => {
    setTotal(total + amount)
  }
  const handleSubs = (amount:any) => {
    setTotal(total - amount)
  }
  return (
    <>
    <div>
      <button onClick={props.handleBack} className="common__backbutton">
        <IoChevronBackCircleOutline size='24px'/>
        <span>Volver</span>
      </button>
      <div className="armaplan__container">
        <h1 className="armaplan__info--title">Mira las coberturas</h1>
        <p className="armaplan__info--subtitle">Conoce las coberturas para tu plan</p>
        <div className="armaplan__info--carinfo-wrap">
          <div className="armaplan__info--carinfo">
            <p>Placa: {carData.licence && carData.licence}</p>
            <h4>{carData.brand && carData.brand} {carData.year && carData.year}<br/>Golf</h4>
            <a href="#">EDITAR</a>
          </div>
          <img src={ArmaPlanImg} alt="armaplan-image"  className='armaplan__info--carimage'/>
        </div>
      </div>
      <div className='armaplan__coberturas'>
        <h2>Agrega o quita coberturas</h2>
        <div className='armaplan__coberturas--controllers'>
          {
            controllers.map((controller:any, key:string) => (
              <div className='armaplan__coberturas--controller' key={key}>{controller}</div>              
            ))
          }
        </div>
        <div className='armaplan__coberturas--info'>
          {
            coberturas.map((cobertura:any, key:string) => (
              <Togller 
                cobertura={cobertura} 
                key={key} 
                handleAdd={handleAdd} 
                handleSubs={handleSubs}
              />
            ))
          }
        </div>

      </div>
    </div>
    <div className="armaplan__sidebar">
      <div className="armaplan__sidebar--header">
        <div className="armaplan__sidebar--header-content">
          <h1>${total}.00</h1>
          <p>mensuales</p>
        </div>
        <img src={Seal} alt='seal' />        
      </div>
      <div className='armaplan__sidebar-items'>
        <p>El precio incluye:</p>
        {
          addons.map((addon: string, key:any) => (
            <div key={key} className='armaplan__sidebar-item'>
              <BiCheck color='#43B748'/>
              <p>{addon}</p>
            </div>
          ))
        }
      </div>
      <Link className="common__button armaplan__button" to="/finish">Lo quiero</Link>
    </div>
    </>
  )
}
