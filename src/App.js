import React, { useState } from 'react';
import ReactDOM from 'react-dom'
import './App.css';
import Button from './button';
import Statistics from './stadistic';


const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const setToGoodValue = newValue => {
    setGood(newValue)
  }

  const setToNeutralValue = newValue => {
    setNeutral(newValue)
  }

  const setToBadValue = newValue => {
    setBad(newValue)
  }

  return (
    <div>
      <h1>Give feedback</h1>
      <p className="buttons-container">
        <Button
          className="good-button"
          handleClick={() => setToGoodValue(good + 1)}
          text="Good" />
        <Button
          className="neutral-button"
          handleClick={() => setToNeutralValue(neutral + 1)}
          text="Neutral" />
        <Button
          className="bad-button"
          handleClick={() => setToBadValue(bad + 1)}
          text="Bad" />
      </p>
      <br />

<h1>Stadistics</h1>

        < Statistics 
        good={good}
        neutral={neutral}
        bad={bad}
        />

    </div>

  );
}

export default App;

ReactDOM.render(<App />,
  document.getElementById('root')
)