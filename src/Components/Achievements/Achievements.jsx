import "./Achievements.css";
import AchievementCard from "./AchievementCard";
import { achievements } from "../../data/achievements";


function Achievements() {
  return (
    <section id="achievement" className="achievements">

      <h4>Highlights</h4>

      <h1>Achievements & Certifications</h1>

      <div className="achievement-grid">

        {achievements.map((item,index) => (
          <AchievementCard
            key={item.id}
            achievement={item}
            index ={index}
          />
        ))}

      </div>

    </section>
  );
}

export default Achievements;