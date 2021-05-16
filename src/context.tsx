import React, { useContext, useState } from 'react'

const PersonContext = React.createContext<any>({})

export function usePersonContext () {
  return useContext(PersonContext)
}

export function PersonProvider ({ children }: any) {
  const [person, setPerson] = useState({})
  const [licence, setLicence] = useState('')
  function handlePerson (newPerson: Object) {
    return setPerson(newPerson)
  }
  function handleLicence(licence: string){       
    return setLicence(licence)
  }

  const value = {
    person,
    licence,
    handlePerson,
    handleLicence
  }

  return (
    <PersonContext.Provider value={value}>
      {children}
    </PersonContext.Provider>
  )
}
