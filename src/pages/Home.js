import './Home.css';
import MyPic from "../Data/turkeycat.jpg";
import LinkedinLogo from "../Data/linkedinLogo.png";
import GithubLogo from "../Data/GithubLogo.png"


export default function Home() {
    
    const WelcomeText = () => {
        return (
            <div className='welcome-container'>
                <span className="line1">Hello, I'm <span className="different-color">Maahir Vohra...</span> </span>
                <span className="line2-3">an aspiring</span>
                <span className="line2-3">software engineer</span>
          </div>
        );
    };
    
    const ContactMe = () => {
        return (
            <div className='contact-container'>
                <br/>
                <br/>
                <span className='contact-header'>Contact Me</span>
                <br/>
                <span className='email'>maahir.vohra14@gmail.com</span>
                <span className='phoneNum'>(908)-887-3205</span>

                {/* linkedin link */}
                <a href='https://www.linkedin.com/in/maahir-vohra-669914234/' target="_blank" rel="noopener noreferrer">
                    <img src={LinkedinLogo} className='linkedin-logo' alt='Link to my personal linkedin'/>
                </a>
                {/* github link */}
                <a href='https://github.com/Mxxhxr' target="_blank" rel="noopener noreferrer">
                    <img src={GithubLogo} className='github-logo' alt='Link to my personal github'/>
                </a>
            </div>
        );
      };
    
    return (
        <div className="Home">
                <backToTop/>
                <section id="Home">
                {
                    <section id="home">
                        <img src={MyPic} className='my-pic' alt="Horseback riding in Cappadocia, Turkey. Made a pitstop for cats and tea! "/> 
                        <div className='Welcome-Message'>
                            <WelcomeText/>
                            <ContactMe/>
                        </div>
                    </section>
                }
                </section>
        </div>
    );
}