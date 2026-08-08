import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "../styles/ActivityDetails.css";
import { saveActivityProgress } from "../services/activityService";

function ActivityDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const activities = {
    1: {
      title: "🧼 Hand Washing",
      steps: [
        "Turn on the tap",
        "Apply soap",
        "Wash your hands",
        "Dry your hands"
      ]
    },

    2: {
      title: "🪥 Brushing Teeth",
      steps: [
        "Take your toothbrush",
        "Apply toothpaste",
        "Brush gently",
        "Rinse your mouth"
      ]
    },

    3: {
      title: "📖 Reading",
      steps: [
        "Open your book",
        "Read the first page",
        "Read slowly",
        "Close the book"
      ]
    },

    4: {
      title: "🏃 Exercise",
      steps: [
        "Stretch your arms",
        "Jump five times",
        "Touch your toes",
        "Take a deep breath"
      ]
    }
  };

  const activity = activities[id];
  const [step, setStep] = useState(0);

  useEffect(() => {
    speak(activity.steps[step]);
  }, [step]);

  function speak(text) {
    window.speechSynthesis.cancel();

    const speech = new SpeechSynthesisUtterance(text);

    speech.rate = 0.9;
    speech.pitch = 1.1;

    window.speechSynthesis.speak(speech);
  }

  async function nextStep() {
    if (step < activity.steps.length - 1) {
      setStep(step + 1);
    } else {
      window.speechSynthesis.cancel();

      const speech = new SpeechSynthesisUtterance(
        "Fantastic! You completed this activity."
      );

    window.speechSynthesis.speak(speech);

const selectedChild = JSON.parse(
  localStorage.getItem("selectedChild")
);

if (selectedChild) {
  try {
    await saveActivityProgress({
      child: selectedChild._id || selectedChild.id,
      activityName: activity.title,
    });
  } catch (error) {
    console.log(error);
  }
}

navigate("/reward");
    }
  }

  return (
    <div className="details-page">

      <h1>{activity.title}</h1>

      <h2>
        Step {step + 1} of {activity.steps.length}
      </h2>

      <div className="instruction-card">

        <h3>{activity.steps[step]}</h3>

      </div>

      <div className="buttons">

        <button onClick={() => speak(activity.steps[step])}>
          🔊 Repeat
        </button>

        <button onClick={nextStep}>
          Next ➜
        </button>

      </div>

    </div>
  );
}

export default ActivityDetails;