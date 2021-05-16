import React from 'react'
import { Header } from './components/shared/Header'

export const Layout = ({children} : any) => {
  return (
    <>
      <Header/>
      {children}
    </>
  )
}
