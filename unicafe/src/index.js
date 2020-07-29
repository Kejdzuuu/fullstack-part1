import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = ({text}) => {
  return (
    <h1>{text}</h1>
  )
}

const Button = ({onClick, name}) => {
  return (
    <button onClick={onClick}>{name}</button>
  )
}

const Stat = ({feedback, number})  => {
  return (
    <>{feedback} {number}<br/></>
  )
}

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const getFeedbackSum = () => {
    return good + neutral + bad
  }

  const getFeedbackAvg = () => {
    if (getFeedbackSum() === 0) return 0
    return (good - bad) / getFeedbackSum()
  }

  const getPositivePercentage = () => {
    if (getFeedbackSum() === 0) return '0 %'
    return (good * 100) / getFeedbackSum() + ' %'
  }

  return (
    <div>
      <Header text='give feedback'/>
      <Button onClick={() => setGood(good + 1)} name='good'/>
      <Button onClick={() => setNeutral(neutral + 1)} name='neutral'/>
      <Button onClick={() => setBad(bad + 1)} name='bad'/>
      <Header text='statistics'/>
      <Stat feedback='good' number={good}/>
      <Stat feedback='neutral' number={neutral}/>
      <Stat feedback='bad' number={bad}/>
      <Stat feedback='all' number={getFeedbackSum()}/>
      <Stat feedback='average' number={getFeedbackAvg()}/>
      <Stat feedback='positive' number={getPositivePercentage()}/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)