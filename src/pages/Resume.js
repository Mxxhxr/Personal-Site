// // import MV_Resume from "../Data/MV_Resume.png";
// import MyResume from "../Data/Maahir_Vohra_Resume.pdf"
// import '../pages/Resume.css';

// export default function Resume () {
//     return (
//         <div>
//         <section id="Resume">
//             <br/>
//             <br/>
//             <embed src={MyResume} type="application/pdf" width="850" height="675"/>
//         </section>
//         </div>
//     )
// };

// import MV_Resume from "../Data/MV_Resume.png";
import MyResume from "../Data/Maahir_Vohra_Resume.pdf";
import '../pages/Resume.css';

export default function Resume() {
    return (
        <div>
            <section id="Resume">
                <br />
                <br />
                <embed src={MyResume} type="application/pdf" width="100%" height="100%" className="pdf-embed" />
            </section>
        </div>
    );
}
