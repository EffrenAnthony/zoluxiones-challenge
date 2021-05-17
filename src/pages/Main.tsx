import { useState } from 'react'
import '../assets/styles/pages/Mainpage.scss'
import { ArmaPlan } from '../components/Main/ArmaPlan'
import { DatosAuto } from '../components/Main/DatosAuto'
import { Sidebar } from '../components/Main/Sidebar'
import { Header } from '../components/shared/Header'
export const Main = () => {
  const [step, setStep] = useState(0)
  return (
    <>
    <Header/>
    <div className='main__container'>
      <Sidebar currentStep={step} />
      <div className='mainview__container'>
        {
          step === 0
            ? <DatosAuto handleNext={() => setStep(step + 1)}/>
            : <ArmaPlan handleBack={() => setStep(step - 1)}/>
        }
      </div>
    </div>
    </>
  )
}
