import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProgressBar from "../components/ProgressBar";
import { getChild, getMood, getActivities } from "../services/dashboardService";
import "../styles/Dashboard.css";

function Dashboard() {
  const navigate = useNavigate();

  const [child, setChild] = useState(null);
  const [mood, setMood] = useState("");
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    fetchDashboard();
  }, []);

  const fetchDashboard = async () => {
    const selectedChild = JSON.parse(
      localStorage.getItem("selectedChild")
    );

    if (!selectedChild) return;

    try {
      const childRes = await getChild(
        selectedChild._id || selectedChild.id
      );

      const moodRes = await getMood(
        selectedChild._id || selectedChild.id
      );

      const activityRes = await getActivities(
        selectedChild._id || selectedChild.id
      );

      setChild(childRes.data);

      setMood(moodRes.data?.mood || "Not Selected");

      setActivities(activityRes.data);
    } catch (error) {
      console.log(error);
    }
  };

  if (!child) return <h2>Loading...</h2>;

  const totalActivities = 4;

  const completedActivities = activities.length;

  const stars = completedActivities;

  const sticker =
    stars >= 4 ? "🏆" :
    stars >= 3 ? "🥇" :
    stars >= 2 ? "😊" :
    "🙂";

  const flower =
    stars >= 4 ? "🌸" :
    stars >= 3 ? "🌷" :
    stars >= 2 ? "🌼" :
    "🌱";

  return (
    <div className="dashboard-page">

      <div className="dashboard-container">

        <div className="dashboard-header">

          <div className="header-icon">
            👩‍🏫
          </div>

          <div className="header-text">
            <h1>Parent & Teacher</h1>
            <h2>Dashboard</h2>
          </div>

        </div>

        <div className="top-cards">

          <div className="dashboard-card">

            <h2>👤 Child Information</h2>

            <p>
              <strong>Name</strong>
              <span>{child.name}</span>
            </p>

            <hr />

            <p>
              <strong>Class</strong>
              <span>{child.className}</span>
            </p>

            <hr />

            <p>
              <strong>Today's Mood</strong>
              <span>😊 {mood}</span>
            </p>

          </div>

          <div className="dashboard-card">

            <h2>⭐ Rewards</h2>

            <p>
              <strong>Stars</strong>
              <span>⭐ {stars}</span>
            </p>

            <hr />

            <p>
              <strong>Sticker</strong>
              <span>{sticker}</span>
            </p>

            <hr />

            <p>
              <strong>Flower</strong>
              <span>{flower}</span>
            </p>

          </div>

        </div>

        <div className="dashboard-card">

          <h2>📚 Activities Completed</h2>

          {activities.length === 0 ? (

            <p>No activities completed.</p>

          ) : (

            <div className="activity-grid">

              {activities.map((activity) => (

                <div
                  key={activity._id}
                  className="activity-item"
                >

                  <span>{activity.activityName}</span>

                  <span>✅</span>

                </div>

              ))}

            </div>

          )}

        </div>

        <ProgressBar
          completed={completedActivities}
          total={totalActivities}
        />

        <div className="dashboard-card">

          <h2>💬 Teacher's Note</h2>

          <p style={{ textAlign: "center" }}>
            Excellent progress today! Keep practicing daily to build confidence and independence.
          </p>

        </div>

        <div className="button-group">

          <button
            className="back-btn"
            onClick={() => navigate("/activity")}
          >
            🔙 Back to Activities
          </button>

          <button
            className="home-btn"
            onClick={() => navigate("/")}
          >
            🏠 Back to Home
          </button>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;