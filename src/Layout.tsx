import React from 'react'
import { Header } from './components/shared/Header'

export const Layout = ({children} : any) => {
  console.log(window.location.pathname === '/');
  
  return (
    <>
      {/* <Header isHome={window.location.pathname === '/'}/> */}
      {children}
    </>
  )
}
