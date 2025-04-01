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
                    I'm a Senior Computer Science major at the New Jersey Institute of Technology, currently slated to graduate in Fall 2025.
                    I'm passionate about solving real-world problems through software, with a strong foundation in full-stack development, backend
                    engineering, and data visualization.
                </p>
                <p className='text2'>
                    In 2024, I interned at <a href='https://www.cambridgeassociates.com/' className='text2 custom-link' target='blank' rel='nooopener noreferrer '>Cambridge Associates</a> as
                    a Full Stack Engineer <span className='paragraph-highlight-color'>for 6 months</span>,
                    where I developed and maintained a client portal used by 1,300 global clients. I built and deployed scalable features end-to-end using React,
                    TypeScript, Java, and Spring Boot, while collaborating with cross-functional teams to ensure robust system performance and a smooth user experience.


                </p>
                <p className='text3'>
                    Previously, I interned at <a href='https://www.medtronic.com/en-us/index.html' className='text2 custom-link' target='blank' rel='noopener noreffer'>Medtronic</a> as a Backend Engineer, where I significantly boosted operational efficiency by automating database tasks.
                    I wrote Python scripts using pandas, pyodbc, and SQLAlchemy to dynamically update database tables, cutting down processing time from 20 minutes
                    to just seconds and eliminating human error. I also crafted insightful dashboards using Power BI to uncover data trends, and contributed to sustainability
                    efforts by reducing paper waste.
                </p>
                <p className='text4'>
                    I'm also certified with a <span className='paragraph-highlight-color'>Lean Six Sigma A3 Yellow Belt</span>, 
                    which has equipped me with a process-oriented mindset that I bring to both technical and team-driven projects.



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
