import Logo from './assets/react_logo.png'
import './App.scss'
const App = () => {
  const number: number = 27
  return (
    <>
    <h1>Hola Mundo {number}</h1>
    <img src={Logo} alt='elefante' style={{height: '100px'}}/>
    </>
    )
}

export default App
