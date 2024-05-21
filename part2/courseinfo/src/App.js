import React from 'react'
import Course from './components/Course'


const App = ({courses}) => {

  console.log('app works')


  return <Course courses={courses} />
}

export default App
