import { useState } from 'react'
import Statistics from './components/Statistics'
import Button from './components/Button'


const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => {
    setGood(good + 1)
  }

  const handleNeutral = () => {
    setNeutral(neutral + 1)
  }

  const handleBad = () => {
    setBad(bad + 1)
  }
  
  const all = good + neutral + bad
  const percentage = Math.round((good / all) * 100)

  return (
    <div>
      <h1>Give Feedback</h1>
        <Button handleClick={handleGood} text="Good" />
        <Button handleClick={handleNeutral} text="Neutral" />
        <Button handleClick={handleBad} text="Bad" />
      <h1>Statistics</h1>
      <Statistics  good={good} neutral={neutral} bad={bad} all={all} percentage={percentage}/>
        
    </div>
  )
}


export default App