function ProgressBar({ completed, total }) {
  const percentage = Math.round((completed / total) * 100);

  return (
    <div className="progress-section">
      <h3>📊 Overall Progress</h3>

      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>

      <p>{percentage}% Completed</p>
    </div>
  );
}

export default ProgressBar;