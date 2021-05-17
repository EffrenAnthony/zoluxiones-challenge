import React, { useContext, useState } from 'react'

const PersonContext = React.createContext<any>({})

export function usePersonContext () {
  return useContext(PersonContext)
}

export function PersonProvider ({ children }: any) {
  const [person, setPerson] = useState({})
  const [carData, setCarData] = useState({})
  function handlePerson (newPerson: Object) {
    return setPerson(newPerson)
  }
  function handleCarData(carData: string){       
    return setCarData(carData)
  }

  const value = {
    person,
    carData,
    handlePerson,
    handleCarData
  }

  return (
    <PersonContext.Provider value={value}>
      {children}
    </PersonContext.Provider>
  )
}
