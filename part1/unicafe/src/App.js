import { useState } from 'react'

const Header = (props) => {
  return (
    <h1>{props.name}</h1>
  )
};

const Button = ({onClick, text}) => {
  return (
    <button onClick={onClick}>{text} </button>
  )
};

const Statistics = ({state, counter}) => {
  return (
    <div>
      <p>{state} {counter}</p>
    </div>
  )

};


const App = () => {
  // enregistrer les clics de chaque bouton dans un état différent
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  const handleGoodClick = () => setGood(good + 1); console.log({good})
  const handleNeutralClick = () => setNeutral(neutral +1); console.log({neutral})
  const handleBadClick = () => setBad(bad +1); console.log({bad})
  
  
  return (
    <div>
      <Header name = 'Give feedback'/>
      <Button onClick={handleGoodClick} text = 'Good'/>
      <Button onClick={handleNeutralClick} text ='Neutral'/>
      <Button onClick={handleBadClick} text ='Bad'/>
      <Header name = 'Statistics'/>
      <Statistics state = 'Good' counter={good}/>
      <Statistics state = 'Neutral' counter={neutral}/>
      <Statistics state = 'Bad' counter={bad}/>
    </div>
  )
};

export default App
