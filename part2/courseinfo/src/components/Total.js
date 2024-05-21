import React from 'react'

const Total = ({parts}) => {

    const total = parts.reduce((sum, part)=> {
        return sum + part.exercices
    }, 0)
  
    return (
      <p>Number of exercises {total}</p>
    )
    }

export default Total