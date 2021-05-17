import { Header } from "../components/shared/Header"
import '../assets/styles/pages/Finish.scss'
import Finishimg from '../assets/static/finishImg.png'
import { usePersonContext } from "../context"
export const Finish = () => {
  const { person } = usePersonContext()
  return (
    <>
    <Header/>
    <div className="finish__container">
      <div className="finish__sidebar--container">
        <img src={Finishimg} alt='finishimg'/>
      </div>
      <div className="finish__content--container">
        <div>
          <h1>¡Te damos la bienvenida! <br/>Cuenta con nosotros para <br/>proteger tu vehículo</h1>
          <p>Enviaremos la confirmación de compra de tu Plan Vehícular Tracking <br/>a tu correo:<br/>
          <strong>{person.email && person.email}</strong></p>
          <button type="button" className='common__button'>cómo usar mi seguro</button>
        </div>
      </div>
    </div>
    </>
  )
}
