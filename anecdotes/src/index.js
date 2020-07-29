import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Uint8Array(props.anecdotes.length))

  const randomizeAnecdote = () => {
    setSelected(Math.floor(Math.random() * props.anecdotes.length))
  }

  const addVote = () => {
    const newVotes = [...votes]
    newVotes[selected] += 1
    setVotes(newVotes)
  }

  const findMaxValueIndex = (array) => {
    let index = 0
    let max = array[0]
    for (let i = 1; i < array.length; i++) {
      if (array[i] > max) {
        max = array[i]
        index = i
      }
    }
    return index
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {props.anecdotes[selected]}<br/>
      has {votes[selected]} votes<br/>
      <button onClick={addVote}>vote</button>
      <button onClick={randomizeAnecdote}>next anecdote</button><br/>
      <h1>Anecdote with most votes</h1>
      {props.anecdotes[findMaxValueIndex(votes)]}<br/>
      has {votes[findMaxValueIndex(votes)]} votes<br/>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
  )