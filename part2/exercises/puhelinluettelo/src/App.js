import { useState, useEffect } from 'react'
import axios from 'axios'

import Content from './components/Content'
import AddPersonForm from './components/AddPersonForm'
import Filter from './components/Filter'


const App = () => {
  const [persons, setPersons] = useState([
    
  ])
  const [newPerson, setNewPerson] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('') 

  const hook = () => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })

    }

  useEffect(hook, [])

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newPerson,
      number: newNumber    
    }

    if (persons.some(person => person.name === newPerson)) 
    {
      alert(`${newPerson} is already added to phonebook`)

    } else {
    setPersons(persons.concat(personObject))
    setNewPerson('')
    setNewNumber('')
  }
}



  const handlePersonChange = (event) => {
    setNewPerson(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
    const regex = new RegExp( event.target.value, 'i' );
    const filteredPersons = () =>
        persons.filter(person => person.name.match(regex))
    setPersons(filteredPersons)
  }
    
  return (
    <div>
     <h1>Phonebook</h1>
      <Filter newFilter={newFilter} handleFilterChange={handleFilterChange} />
     <h2>Add a new</h2>
      <AddPersonForm addPerson={addPerson} newPerson={newPerson} handlePersonChange={handlePersonChange} newNumber={newNumber} handleNumberChange={handleNumberChange}/>
      <h2>Numbers</h2>
      <Content persons={persons} />
    </div>
  );
}

export default App;
