import MyPic from "/Users/maahirvohra/Desktop/Code/personalSite/personal-site/src/Components/MyPicture.png";
import './App.css';
import MV_Resume from "/Users/maahirvohra/Desktop/Code/personalSite/personal-site/src/Components/MV_Resume.png";


function App() {
  return (
    <div className="App">
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
                  welcome to my site
                  </h1>
                  <div className="additional-txt">
                  <h2>My name is <span class="my-name">Maahir Vohra</span></h2>
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

    </div>


  );
}

export default App;
