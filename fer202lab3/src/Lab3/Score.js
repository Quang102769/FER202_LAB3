function Score({ score, totalQuestions, onRestart }) {
  const percentage = Math.round((score / totalQuestions) * 100);
  
  let resultMessage = "Good Job!";
  let resultColor = "text-success";
  if (percentage === 100) {
    resultMessage = "Perfect Score! 🏆";
  } else if (percentage < 50) {
    resultMessage = "Keep Trying! 💪";
    resultColor = "text-warning";
  }

  return (
    <div className="card shadow-lg border-0 rounded-4 text-center p-5" style={{ maxWidth: '500px', width: '100%' }}>
      <div className="card-body">
        <h1 className="display-4 fw-bold mb-3 text-primary">Quiz Completed!</h1>
        
        <div className="my-5">
          <h2 className="display-1 fw-bold text-primary mb-4">{score}/{totalQuestions}</h2>
          <div className="progress" style={{ height: '30px' }}>
            <div 
              className="progress-bar progress-bar-striped progress-bar-animated bg-primary fs-5" 
              role="progressbar" 
              style={{ width: `${percentage}%` }} 
              aria-valuenow={percentage} 
              aria-valuemin="0" 
              aria-valuemax="100"
            >
              {percentage}%
            </div>
          </div>
        </div>

        <h3 className={`fw-bold mb-4 ${resultColor}`}>{resultMessage}</h3>
        <p className="text-muted mb-5 fs-5">
          You scored {percentage}% on this quiz.
        </p>

        <button 
          type="button" 
          className="btn btn-primary btn-lg rounded-pill px-5 py-3 fw-bold shadow-sm"
          onClick={onRestart}
        >
          <i className="bi bi-arrow-clockwise me-2"></i> Play Again
        </button>
      </div>
    </div>
  );
}

export default Score;
