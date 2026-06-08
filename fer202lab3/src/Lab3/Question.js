function Question({
  question,
  onAnswer,
  selectedOptionId,
  disabled,
  questionNumber,
  totalQuestions,
}) {
  const progressPercent = ((questionNumber - 1) / totalQuestions) * 100;

  return (
    <div className="card shadow-lg border-0 rounded-4" style={{ maxWidth: '600px', width: '100%' }}>
      <div className="card-body p-5">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h5 className="text-muted fw-bold mb-0">Question {questionNumber} of {totalQuestions}</h5>
          <span className="badge bg-primary rounded-pill px-3 py-2 shadow-sm">
            {questionNumber}/{totalQuestions}
          </span>
        </div>
        
        <div className="progress mb-4 rounded-pill" style={{ height: '8px' }}>
          <div 
            className="progress-bar bg-primary rounded-pill" 
            role="progressbar" 
            style={{ width: `${progressPercent}%`, transition: 'width 0.5s ease-in-out' }} 
            aria-valuenow={progressPercent} 
            aria-valuemin="0" 
            aria-valuemax="100"
          ></div>
        </div>

        <h3 className="card-title fw-bold text-dark mb-4 lh-base" style={{ fontSize: '1.5rem' }}>
          {question.question}
        </h3>

        <div className="options d-flex flex-column gap-3">
          {question.options.map((option) => {
            const isSelected = selectedOptionId === option.id;
            let btnClass = "btn btn-outline-primary btn-lg text-start rounded-3 position-relative overflow-hidden";
            
            if (isSelected) {
              btnClass = "btn btn-primary btn-lg text-start rounded-3 shadow-sm position-relative overflow-hidden";
            } else if (disabled) {
              btnClass += " opacity-50";
            }

            return (
              <button
                key={option.id}
                type="button"
                className={btnClass}
                onClick={() => onAnswer(option.id)}
                disabled={disabled}
                style={{ transition: 'all 0.3s ease' }}
              >
                <div className="d-flex align-items-center">
                  <span className="option-marker d-flex align-items-center justify-content-center rounded-circle me-3 fw-bold" style={{ width: '32px', height: '32px', border: '2px solid currentColor' }}>
                    {String.fromCharCode(64 + option.id)} {/* A, B, C, D... */}
                  </span>
                  <span className="option-text">{option.text}</span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Question;
