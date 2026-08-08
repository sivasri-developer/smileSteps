import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./../styles/Mood.css";
import { saveMood } from "../services/moodService";
function Mood() {
  const navigate = useNavigate();

  const [selectedMood, setSelectedMood] = useState("");

  const moods = [
    { emoji: "😊", name: "Happy" },
    { emoji: "🙂", name: "Okay" },
    { emoji: "😔", name: "Sad" },
    { emoji: "😡", name: "Angry" },
    { emoji: "😴", name: "Tired" },
  ];

  const handleMood = async (mood) => {

  setSelectedMood(mood.name);

  const child = JSON.parse(
    localStorage.getItem("selectedChild")
  );

  if (child) {
    try {
      await saveMood({
        child: child._id,
        mood: mood.name,
      });
    } catch (error) {
      console.log(error);
    }
  }

  const speech = new SpeechSynthesisUtterance(
    `You are feeling ${mood.name}. Great! Let's continue.`
  );

  speech.rate = 0.9;
  speech.pitch = 1.1;
  speech.volume = 1;

  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(speech);
};

  return (
    <div className="mood-page">
      <h1>😊 How are you feeling today?</h1>

      <p>Choose the emoji that matches your feeling.</p>

      <div className="mood-container">
        {moods.map((mood) => (
          <button
            key={mood.name}
            className={
              selectedMood === mood.name
                ? "mood-btn selected"
                : "mood-btn"
            }
            onClick={() => handleMood(mood)}
          >
            <span className="emoji">{mood.emoji}</span>
            <br />
            {mood.name}
          </button>
        ))}
      </div>

      {selectedMood && (
        <>
          <h2>⭐ Great Job! ⭐</h2>

          <button
            className="continue-btn"
            onClick={() => navigate("/activity")}
          >
            Continue ➜
          </button>
        </>
      )}
    </div>
  );
}

export default Mood;