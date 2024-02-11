import React from 'react';
import './AboutMe.css';
import MyPic from "../Data/canadaLakepic.jpg";
// import {Badge, Stack} from '@chakra-ui/react';

export default function AboutMe ({currentPage}) {

    const Header = () => {
        return (
                <div className='header-container'>
                    <span className='about-me-header'>About Me</span>
                </div>
            );
        };

    const Paragraph = () => {
        return (
            <div className='paragraph-container'>    
                <p className='text'>
                    I’m a junior Computer Science major at New Jersey Institute of Technology. 
                    I interned in summer of 2023 at Medtronic as a Technology Intern. 
                </p>
                <p className='text2'>
                    Throughout my tenure, I elevated operational efficiency by implementing 
                    automation and harnessing the power of data visualization. I crafted Python 
                    scripts, leveraging <span className='paragraph-highlight-color'>pandas, pyodbc, and SQLAlchemy</span>, to dynamically automate 
                    data insertion. This not only slashed processing time but also minimized errors.
                </p>
                <p className='text3'>
                    On the data front, I honed my skills in Power BI, empowering me to craft 
                    insightful, data-driven dashboards. Additionally, I count 
                    myself fortunate to have undergone Lean Six Sigma training, earning my <span className='paragraph-highlight-color'>A3 Yellow 
                    Belt certification</span> along the way!
                    <div className='skills-container'>
                        <span className='skills-header'>My Skills</span>
                        <span className='skills'>
                            Python, Java, C, C++, HTML/CSS, JavaScript, ReactJS, Flask, Bash, MySQL, Oracle SQL, NumPy, SciPy, TensorFlow, Scikit-Learn, PyTorch, Keras, pandas, Github, 
                            Power BI, Figma, Linux, Windows, macOS, Android, iOS
                        </span>
                    </div>
                </p>
            </div>
        );
    };

    return (
        <div className="about-me">
            <Header/>
            <Paragraph/>
            <div className='enlarged-image'>
                <img src={MyPic} className='my-other-pic' alt="Me in Banff National Park, Canada"/> 
            </div>
        </div>
    );
};

// https://chakra-ui.com/docs/components/badge
// could use this to show my skills would look cool
