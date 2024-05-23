import { useState } from "react";

const Header = (props) => {
  return <h1>{props.text}</h1>;
};

const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
};

const Anecdote = ({ text, voteCounts }) => {
  return (
    <div>
      <p>{text}</p>
      <p>has {voteCounts} votes</p>
    </div>
  );
};

const BestAnecdote = ({ anecdotes, allVotes }) => {
  const highestVoteCount = Math.max(...allVotes);
  const bestAnecdoteIndex = allVotes.indexOf(highestVoteCount);
  const bestAnecdote = anecdotes[bestAnecdoteIndex];
  if (highestVoteCount === 0) {
    return <p>No votes yet</p>;
  }

  return (
    <div>
      <p>{bestAnecdote}</p>
      <p>has {highestVoteCount} votes</p>
    </div>
  );
};

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
  ];

  const [selected, setSelected] = useState(0);
  const [allVotes, setAllVotes] = useState(Array(7).fill(0));

  const handleVoteClick = () => {
    const newAllVotes = [...allVotes];
    newAllVotes[selected] += 1;
    setAllVotes(newAllVotes);
  };

  const handleNextClick = () =>
    setSelected(Math.floor(Math.random() * anecdotes.length));

  return (
    <div>
      <Header text="Anecdote of the day" />
      <Anecdote text={anecdotes[selected]} voteCounts={allVotes[selected]} />
      <Button onClick={handleVoteClick} text="Vote" />
      <Button onClick={handleNextClick} text="Next Anecdote" />

      <Header text="Anecdote with most votes" />
      <BestAnecdote anecdotes={anecdotes} allVotes={allVotes} />
    </div>
  );
};

export default App;
