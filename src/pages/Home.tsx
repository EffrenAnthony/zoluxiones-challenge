import { useEffect } from 'react';
import '../assets/styles/pages/Home.scss'
import { Hero } from '../components/Home/Hero'
import { HomeForm } from '../components/Home/HomeForm';
import { usePersonContext } from '../context';

export const Home = () => {
  const { handlePerson } = usePersonContext()
  const API ='https://randomuser.me/api/'
  useEffect(()=> {
    fetch(API)
    .then((response)=> response.json()
      .then(data => {
        console.log(data.results[0])
        handlePerson(data.results[0])
      }
      )
    )
  },[API])
  return (
    <div className='home__container'>
      <Hero />
      <HomeForm />
    </div>
  )
}
