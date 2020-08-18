
import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Button from './button'
import MostVotes from './mostVotes'

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState([0, 0, 0, 0, 0, 0])

  const handleClickRandom = () => {
    setSelected(Math.floor((Math.random() * 6)))
    console.log(selected)
  }

  const vote = () => {
    let aux = [...points]
    aux[selected] += 1
    setPoints(aux)
    console.log(points)
  }

  return (
    <div>
      <div>
        <h1>Anecdote of the day</h1>
        {props.anecdotes[selected]}
      </div>
      <div>
        has {points[selected]} votes
      </div>
      <div>
        <button onClick={() => vote()} >
          vote
        </button>
        <Button text="next anecdote" handleClick={handleClickRandom} />
      </div>
      <div>
        <MostVotes points={points} anecdotes={props.anecdotes} />
      </div>
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