function Star({ stars }) {
  return (
    <div className="reward-card">

      <h2>⭐ Star Rewards</h2>

      <div className="big-emoji">
        ⭐
      </div>

      <h1>{stars} Star</h1>

      <p>Fantastic! You earned a new star.</p>

    </div>
  );
}

export default Star;