import React from 'react';

const Filter = ({newFilter, handleFilterChange}) => {
    return (
      <form>
        <div>
          filter by: <input 
          value={newFilter} 
          onChange={handleFilterChange}/>
        </div>
      </form>
    )
  }

export default Filter 
  