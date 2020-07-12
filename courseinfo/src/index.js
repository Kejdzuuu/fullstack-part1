import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Part = (props) => {
  return (
    <p>
      {props.title} {props.size}
    </p>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part title={props.part[0]} size={props.exercise[0]} />
      <Part title={props.part[1]} size={props.exercise[1]} />
      <Part title={props.part[2]} size={props.exercise[2]} />
    </div>
  )
}

const Total = (props) => {
  return (
    <p>Number of exercises {props.number}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercise1 = 10
  const part2 = 'Using props to pass data'
  const exercise2 = 7
  const part3 = 'State of a component'
  const exercise3 = 14

  return (
    <div>
      <Header course={course}/>
      <Content part={[part1, part2, part3]} exercise={[exercise1, exercise2, exercise3]}/>
      <Total number={exercise1 + exercise2 + exercise3}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))