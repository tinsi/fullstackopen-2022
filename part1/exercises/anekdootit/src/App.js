import { useState } from 'react'
import Button from './components/Button'

// toimii, mutta siirrä toiminnallisuuksia komponenteiksi jos jaksat

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
    'The only way to go fast, is to go well.'
  ]


const [selected, setSelected] = useState(0)
const [votes, setVotes] = useState(Array(8).fill(0))

const handleNextAnecdote = () => {
  setSelected(Math.floor(Math.random() * anecdotes.length))
}

const handleVoteAnecdote = () => { 
  const copyOfVotes = [...votes];
  copyOfVotes[selected] += 1;
  setVotes(copyOfVotes);
}


// voittaja-anekdootti, tee tästä komponentti
 
const indexOfHighestVote = votes.indexOf(Math.max(...votes))

const votedBest = anecdotes[indexOfHighestVote]



return (
  <div>
    <h1>Vote for the anecdote</h1>
    <p>{anecdotes[selected]}</p>
    <p>Votes: {votes[selected]}</p>
      <Button handleClick={handleNextAnecdote} text="Next Anecdote" />
      <Button handleClick={handleVoteAnecdote} text="Vote" />
    
    <h1>Winner Anecdote</h1>
    <p>{votedBest}</p>
    <p>Votes: {votes[indexOfHighestVote]}</p>
      
  </div>
)
}

export default App