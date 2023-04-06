import React from 'react'

const Content = ({persons}) => {
    return (
        <ul>
             {persons.map((person) => 
             <li key={person.name}>{person.name} {person.number}</li>)}
        </ul>
    )
  }

export default Content