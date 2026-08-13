// import { achievements } from "../../data/achievements";
import "./Achievements.css"
import { motion } from "framer-motion";

function AchievementCard({achievement,index}){

    const Icon = achievement.icon;
    return(
        <motion.div
  className="achievement-card"
  initial={{
    opacity: 0,
    y: 80
  }}
  whileInView={{
    opacity: 1,
    y: 0
  }}
  viewport={{ once: true }}
  transition={{
    duration: 0.6,
    delay: index * 0.15
  }}
  whileHover={{
    y: -10,
    scale: 1.03
  }}
>
            <div className="achievement-icon">
                <Icon/>
            </div>
            <h2>{achievement.title}</h2>
            <h4>{achievement.subtitle}</h4>
            <p>{achievement.description}</p>

        </motion.div>
    );
}

export default AchievementCard;