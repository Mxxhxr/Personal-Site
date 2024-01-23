// import MV_Resume from "../Data/MV_Resume.png";
import MyResume from "../Data/Maahir_Vohra_Resume.pdf"
import '../pages/Resume.css';

export default function Resume () {
    return (
        <div>
        <section id="Resume">
            <br/>
            <br/>
            <embed src={MyResume} type="application/pdf" width="1000" height="1150"/>


        {/* <img src={MV_Resume} className="resume-pic" alt="My Resume"/> */}
        </section>
        </div>
    )
};