import {useState} from "react";
import HomePage from "./HomePage/HomePage"
import {Route} from "react-router-dom";
import Buttons from "./HomePage/Buttons";

function App() {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [count, setCount] = useState(0);
  const [score, setScore] = useState(0);
  const BASE_URL = `https://opentdb.com/api.php?amount=10&category=`;
  
  function handleClick({target}) {
    fetch(`${BASE_URL}${target.value}&difficulty=easy`)
    .then((response) => response.json())
    .then((data) => {
      setQuestions(data.results);
    })
    .catch(err=>console.log(err));
  }

  function handleAnswerClick({target}) {
    setScore((currentScore) => currentScore + target.value);
    if (count < 10) {
      setCount((currentCount) => currentCount+1);
    }
  }

  
  return (
    <div className="App">
      <Route path="/">
       <HomePage handleClick={handleClick} />  
      </Route>
    </div>
  );
}

export default App;
