import { useNavigate } from "react-router-dom";

import Celebration from "./Celebration";
import Star from "./Star";
import Sticker from "./Sticker";
import Flower from "./Flower";

import "../styles/Reward.css";

function Reward() {

  const navigate = useNavigate();

  const stars = 1;

  return (

    <div className="reward-page">

      <div className="reward-container">

        <Celebration />

        <Star stars={stars} />

        <Sticker stars={stars} />

        <Flower stars={stars} />
        
<p className="dashboard-note">
  Parents and teachers can view the child's progress below.
</p>

      <button
  className="continue-btn"
  onClick={() => navigate("/dashboard")}
>
  👩‍🏫 View Parent Dashboard
</button>
      </div>

    </div>

  );

}

export default Reward;