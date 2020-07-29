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
    <tr>
      <td>{feedback}</td>
      <td>{number}</td>
    </tr>
  )
}

const Statistics = ({stats}) => {
  if (stats.sum === 0) {
    return (
      <p>No feedback given</p>
    )
  }
  return (
    <table>
      <tbody>
        <Stat feedback='good' number={stats.good}/>
        <Stat feedback='neutral' number={stats.neutral}/>
        <Stat feedback='bad' number={stats.bad}/>
        <Stat feedback='all' number={stats.sum}/>
        <Stat feedback='average' number={stats.avg}/>
        <Stat feedback='positive' number={stats.percentage}/>
      </tbody>
    </table>
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

  const stats = {
    good: good,
    neutral: neutral,
    bad: bad,
    sum: getFeedbackSum(),
    avg: getFeedbackAvg(),
    percentage: getPositivePercentage()
  }

  return (
    <div>
      <Header text='give feedback'/>
      <Button onClick={() => setGood(good + 1)} name='good'/>
      <Button onClick={() => setNeutral(neutral + 1)} name='neutral'/>
      <Button onClick={() => setBad(bad + 1)} name='bad'/>
      <Header text='statistics'/>
      <Statistics stats={stats}/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)