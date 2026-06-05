import React, { useState } from "react";
import Question from "./Question";
import Score from "./Score";
import initialQuestions from "../data/questions";

function QuizzApp() {
  const [questions] = useState(initialQuestions);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedOptionId, setSelectedOptionId] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);

  const handleAnswer = (optionId) => {
    if (isAnswered) {
      return;
    }

    const current = questions[currentQuestion];
    const isCorrect = optionId === current.correctOptionId;

    setSelectedOptionId(optionId);
    setIsAnswered(true);

    if (isCorrect) {
      setScore((prevScore) => prevScore + 1);
    }

    setTimeout(() => {
      const nextQuestion = currentQuestion + 1;

      if (nextQuestion < questions.length) {
        setCurrentQuestion(nextQuestion);
        setSelectedOptionId(null);
        setIsAnswered(false);
      } else {
        setShowScore(true);
      }
    }, 700);
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setSelectedOptionId(null);
    setIsAnswered(false);
  };

  if (showScore) {
    return (
      <Score
        score={score}
        totalQuestions={questions.length}
        onRestart={restartQuiz}
      />
    );
  }

  const current = questions[currentQuestion];

  return (
    <Question
      question={current}
      onAnswer={handleAnswer}
      selectedOptionId={selectedOptionId}
      disabled={isAnswered}
      questionNumber={currentQuestion + 1}
      totalQuestions={questions.length}
    />
  );
}

export default QuizzApp;
