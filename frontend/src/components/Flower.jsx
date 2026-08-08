function Flower({ stars }) {

  let flower = "🌱";
  let message = "Your seed has started growing!";

  if (stars >= 10) {
    flower = "🌿";
    message = "Your plant is growing!";
  }

  if (stars >= 20) {
    flower = "🌸";
    message = "Beautiful Flower!";
  }

  if (stars >= 50) {
    flower = "🌳";
    message = "Amazing! Your flower became a tree!";
  }

  return (

    <div className="reward-card">

      <h2>🌼 Flower Growth</h2>

      <div className="flower-emoji">
    {flower}
</div>

      <p>{message}</p>

    </div>

  );

}

export default Flower;