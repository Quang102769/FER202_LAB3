function Question({
  question,
  onAnswer,
  selectedOptionId,
  disabled,
  questionNumber,
  totalQuestions,
}) {
  return (
    <div className="quiz-container">
      <h2>
        Question {questionNumber}/{totalQuestions}
      </h2>
      <h3>{question.question}</h3>
      <div className="options">
        {question.options.map((option) => {
          const isSelected = selectedOptionId === option.id;
          return (
            <button
              key={option.id}
              type="button"
              className={isSelected ? "option active" : "option"}
              onClick={() => onAnswer(option.id)}
              disabled={disabled}
            >
              {option.text}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Question;
