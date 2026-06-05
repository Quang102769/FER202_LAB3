function Score({ score, totalQuestions, onRestart }) {
  return (
    <div className="quiz-container">
      <h1>Score</h1>
      <p>
        You answered {score}/{totalQuestions} questions correctly.
      </p>
      <button type="button" onClick={onRestart}>
        Restart
      </button>
    </div>
  );
}

export default Score;
