import './Home.css';
import MyPic from "../Data/MyPicture.png";
import MV_Resume from "../Data/MV_Resume.png";
//import menuBar from "./Components/menuBar.js"

export default function Home() {
    return (
        <div className="Home">
                <backToTop/>
                {/* <NavBar /> */}
                <header>
                {/* Your header content */}
                </header>
                <section id="Home">
                {
                    <section id="home">
                    <img src={MyPic} className='my-pic' alt="My Picture"/> 
                    <h1 className="welcome-text">
                    <span class="first-word">Hello,</span><br></br>
                    welcome to my site.
                    </h1>
                    <div className="additional-txt">
                    <h2>My name is <span class="my-name">Maahir Vohra.</span></h2>
                    </div>
                    </section>
                }
                </section>
                <section id="About Me">
                {/* Portfolio section content */}
                </section>
                <section id="Resume">
                <img src={MV_Resume} className="resume-pic" alt="My Resume"/>
                </section>
                {/* <menuBar/> */}
        </div>


    );
}