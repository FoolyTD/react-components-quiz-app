export default function () {
  return (
    <div>
      <h2>Your Score: {score}</h2>
      <Buttons handleClick={handleClick} />
      <h1>{questions.length && questions[count].question}</h1>
      <ul>
        {questions.length &&
          questions[count].incorrect_answers.map((answer) => (
            <li value={-1} onClick={handleAnswerClick}>
              {answer}
            </li>
          ))}
        {questions.length && (
          <li value={1} onClick={handleAnswerClick}>
            {questions[count].correct_answer}
          </li>
        )}
      </ul>
    </div>
  );
}
