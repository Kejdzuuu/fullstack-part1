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
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course}/>
      <Content part={[part1.name, part2.name, part3.name]} exercise={[part1.exercises, part2.exercises, part3.exercises]}/>
      <Total number={part1.exercises + part2.exercises + part3.exercises}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))