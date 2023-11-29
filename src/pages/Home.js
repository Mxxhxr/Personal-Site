import './Home.css';
import MyPic from "../Data/MyPicture.png";

export default function Home() {
    return (
        <div className="Home">
                <backToTop/>
                <section id="Home">
                {
                    <section id="home">
                    <img src={MyPic} className='my-pic' alt="My Picture"/> 
                    <div className='Welcome-Message'>
                        <h1 className="welcome-text">
                            <span class="first-word">Hello,</span><br></br>
                            welcome to my site.
                        </h1>
                        <div className="additional-txt">
                            <h2>My name is <span class="my-name">Maahir Vohra.</span></h2>
                        </div>
                    </div>
                    </section>
                }
                </section>
        </div>
    );
}
