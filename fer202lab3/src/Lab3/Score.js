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
        
        <div className="my-5 position-relative d-inline-block">
          <svg viewBox="0 0 36 36" className="circular-chart primary" style={{ width: '150px', height: '150px' }}>
            <path
              className="circle-bg"
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="#eee"
              strokeWidth="3"
            />
            <path
              className="circle"
              strokeDasharray={`${percentage}, 100`}
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="#4e73df"
              strokeWidth="3"
              style={{ animation: 'progress 1s ease-out forwards' }}
            />
          </svg>
          <div className="position-absolute top-50 start-50 translate-middle">
            <span className="fs-2 fw-bold">{score}/{totalQuestions}</span>
          </div>
        </div>

        <h3 className={`fw-bold mb-4 ${resultColor}`}>{resultMessage}</h3>
        <p className="text-muted mb-5 fs-5">
          You scored {percentage}% on this quiz.
        </p>

        <button 
          type="button" 
          className="btn btn-primary btn-lg rounded-pill px-5 py-3 fw-bold shadow-sm hover-scale"
          onClick={onRestart}
          style={{ transition: 'transform 0.2s' }}
        >
          <i className="bi bi-arrow-clockwise me-2"></i> Play Again
        </button>
      </div>
    </div>
  );
}

export default Score;
