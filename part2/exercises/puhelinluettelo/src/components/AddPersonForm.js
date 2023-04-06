import React from 'react';

const AddPersonForm = ({addPerson, newPerson, handlePersonChange, newNumber, handleNumberChange}) => {
    return (
    <form onSubmit={addPerson}>
    <div>
      name: <input 
      value={newPerson}
      onChange={handlePersonChange}
      />
      number: <input 
      value={newNumber}
      onChange={handleNumberChange}
      />
    </div>
    <div>
      <button type="submit">Add</button>
    </div>
  </form>
  )}
  
  export default AddPersonForm