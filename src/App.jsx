import './App.css'
import { useState } from "react";
import Header from "./Header.jsx";
import Content from "./Content.jsx";

function App() {
  // Both Header and content need to use these states
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  // Handle score changes
  function handleScoreUpdate(nextScore) {
    setScore(nextScore);
    setHighScore(prev => Math.max(prev, nextScore));
  }

  function handleResetScore() {
    setScore(0);
  }

  return (
    <>
      <Header  score={score} 
               highScore={highScore}/>

      <Content score={score}
               onScoreUpdate={handleScoreUpdate}
               onScoreReset={handleResetScore}/>
    </>
  );
}

export default App;