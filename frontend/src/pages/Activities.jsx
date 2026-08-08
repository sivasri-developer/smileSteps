
import { useNavigate } from "react-router-dom";
import "../styles/Activities.css";
function Activities() {
const navigate = useNavigate();
  const activities = [
    {
      id: 1,
      title: "Hand Washing",
      image: "🧼",
      description: "Learn to wash hands step by step"
    },
    {
      id: 2,
      title: "Brushing Teeth",
      image: "🪥",
      description: "Learn healthy brushing habits"
    },
    {
      id: 3,
      title: "Reading",
      image: "📖",
      description: "Improve reading skills"
    },
    {
      id: 4,
      title: "Exercise",
      image: "🏃",
      description: "Simple physical activities"
    }
  ];

  return (
    <div className="activities-page">

      <h1>Activities Page</h1>
      <p>Welcome to SmileSteps Activities Module</p>

      <div className="activity-container">

        {activities.map((activity) => (
          <div className="activity-card" key={activity.id}>
            <div className="activity-icon">
              {activity.image}
            </div>

            <h2>{activity.title}</h2>
            <p>{activity.description}</p>

         <button onClick={() => navigate(`/activity/${activity.id}`)}>
  Start Activity
</button>

          </div>
        ))}

      </div>

    </div>
  );
}

export default Activities;