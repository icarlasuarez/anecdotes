import { useState } from 'react';
import './App.css';

const Button = (props) => {
  return <button onClick={props.onClick}>{props.text}</button>
}
const Header = (props) => {
  return <h1>{props.text}</h1>
}
const Display = (props) => {
  return (
    <div>
      {props.anecdote}
      <br/>
      has {props.votes} votes
    </div>
    
  )
}
const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(Array(anecdotes.length).fill(0))

  const showRandomAnecdote = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length))
  }
  const voteAnecdote = () => {
    setPoints(points.map((v, i) => i === selected ? v + 1 : v))
  }
  const mostVoted = () => {
    console.log(points.indexOf(Math.max(points)))
    return points.indexOf(Math.max.apply(null, points))
  }
  return (
    <div>
      <Header text="Anecdote of the day"/>
      <Display anecdote={anecdotes[selected]} votes={points[selected]} />
      <br/>
      <Button text="Get random anecdote" onClick={showRandomAnecdote}/>
      <Button text="Vote anecdote" onClick={voteAnecdote}/>
      <Header text="Anecdote with most votes"/>
      <Display anecdote={anecdotes[mostVoted()]} votes={points[mostVoted()]} />
    </div>
  )
}

export default App;
