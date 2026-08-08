
import { Routes, Route, useNavigate } from "react-router-dom";
import Mood from "./pages/Mood";
import { useEffect, useState } from "react";
import "./App.css";
import Activities from "./pages/Activities";
import ActivityDetails from "./pages/ActivityDetails";
import RewardPage from "./pages/RewardPage";
import Dashboard from "./pages/Dashboard";
import { getChildren } from "./services/childService";
function App() {
  const [children, setChildren] = useState([]);

  const [selectedChild, setSelectedChild] = useState(null);
  const navigate = useNavigate();

  // Voice Welcome
  useEffect(() => {
    const speech = new SpeechSynthesisUtterance(
      "Hello! Welcome to SmileSteps. Tap your photo to begin."
    );

    speech.rate = 0.9;
    speech.pitch = 1.1;

    window.speechSynthesis.speak(speech);
    const fetchChildren = async () => {
  try {
    const response = await getChildren();

    console.log("API Response:", response.data);

    setChildren(response.data);
  } catch (error) {
    console.error("Error:", error);
  }
};

fetchChildren();
  }, []);

const selectChild = (child) => {
  console.log("Clicked:", child);

  setSelectedChild(child);

  localStorage.setItem(
    "selectedChild",
    JSON.stringify({
      ...child,
      id: child._id,
    })
  );

  const speech = new SpeechSynthesisUtterance(
    `Hello ${child.name}. Let's have a fun day together.`
  );

  speech.rate = 0.9;
  speech.pitch = 1.2;

  window.speechSynthesis.speak(speech);
};
return (
  <Routes>

    <Route
      path="/"
      element={
        <div className="app">

          <div className="header">

            <h1>🌈 SmileSteps 🌸</h1>

            <h2>Helping Every Small Step Bloom</h2>

            <p className="subtitle">
              👇 Tap your photo to begin today's adventure
            </p>

          </div>

          <div className="card-container">

            {children.map((child) => (
              <div
                className="card"
                key={child._id}
                onClick={() => selectChild(child)}
              >
                <img src={child.photo} alt={child.name} />

                <h3>{child.name}</h3>

              </div>
            ))}

          </div>

          {selectedChild && (

            <div className="welcome-card">

              <h2>
                👋 Hello, {selectedChild.name}!
              </h2>

              <p>
                🌸 Let's have a fun day together!
              </p>

              <button onClick={() => navigate("/mood")}>
                🚀 Start Adventure
              </button>

            </div>

          )}

          <footer>
            ❤️ Made with Love for Blossom Children ❤️
          </footer>

        </div>
      }
    />

    <Route path="/mood" element={<Mood />} />
    <Route path="/activity" element={<Activities />} />
    <Route path="/activity/:id" element={<ActivityDetails />} />
    <Route path="/reward" element={<RewardPage />} />
    <Route path="/dashboard" element={<Dashboard />} />
  </Routes>
);
}

export default App;