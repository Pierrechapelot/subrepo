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

const StatisticLine = ({text, value}) => {
  return (
    <div>
      <p>{text} {value}</p>
    </div>
  )
}



const Statistics = ({clicks}) => {

  const total = clicks.good + clicks.neutral + clicks.bad;
  const score = clicks.good - clicks.bad;
  const average = score/total;
  const positive = clicks.good/total*100;

  if (total === 0) {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )
  }

  return (
    <div>
      <StatisticLine text='Good' value = {clicks.good} />
      <StatisticLine text='Neutral' value = {clicks.neutral}/>
      <StatisticLine text='Bad' value = {clicks.bad}/>
      <StatisticLine text='Total' value ={total}/>
      <StatisticLine text='Average' value={average}/>
      <StatisticLine text='Positive' value ={positive + ' %'}/>
    </div>
  )

};


const App = () => {

  const [clicks, setClicks] = useState({good:0, neutral:0, bad:0})


  const handleGoodClick = () => setClicks({...clicks, good: clicks.good +1}); 
  const handleNeutralClick = () => setClicks({...clicks, neutral : clicks.neutral +1}); 
  const handleBadClick = () => setClicks({...clicks, bad: clicks.bad +1}); 
  
  
  return (
    <div>
      <Header name = 'Give feedback'/>
      <Button onClick={handleGoodClick} text = 'Good'/>
      <Button onClick={handleNeutralClick} text ='Neutral'/>
      <Button onClick={handleBadClick} text ='Bad'/>
      <Header name = 'Statistics'/>
      <Statistics clicks={clicks}/>

    </div>
  )
};

export default App
