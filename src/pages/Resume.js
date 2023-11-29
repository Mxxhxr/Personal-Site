import MV_Resume from "../Data/MV_Resume.png";
import '../pages/Resume.css';

export default function Resume () {
    return (
        <div>
        <section id="Resume">
        <img src={MV_Resume} className="resume-pic" alt="My Resume"/>
        </section>
        </div>
    )
};