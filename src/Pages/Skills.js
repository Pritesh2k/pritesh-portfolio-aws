import React, { useState } from 'react';
import '../CSS/skills.css';

import CloseIcon from '@mui/icons-material/Close';

import PythonOriginal from 'devicons-react/lib/icons/PythonOriginal';
import JavaOriginal from 'devicons-react/lib/icons/JavaOriginal';
import JavascriptPlain from 'devicons-react/lib/icons/JavascriptPlain';
import AndroidstudioOriginal from 'devicons-react/lib/icons/AndroidstudioOriginal';
import ReactOriginalWordmark from 'devicons-react/lib/icons/ReactOriginalWordmark';
import AmazonwebservicesOriginalWordmark from 'devicons-react/lib/icons/AmazonwebservicesOriginalWordmark';
import PowershellOriginal from 'devicons-react/lib/icons/PowershellOriginal';

const skillsList = {
  technical: [<AmazonwebservicesOriginalWordmark size={30}/>, <PythonOriginal size={30}/>, <JavaOriginal size={30}/>, <JavascriptPlain size={30}/>, <ReactOriginalWordmark size={30}/>, <PowershellOriginal size={30}/>, <AndroidstudioOriginal size={30}/>],
  techincalDesc: ["AWS | CI/CD", "Python | Data Analysis, Scripting", "Java | OOP", "Java Script", "React JS | Full-Stack, Design", "Command Line", "Android Studios | Java"],
  academic: ["Software Development & Management", "System Architecture", "Artificial Intelligence", "Cybersecurity", "Networking", "Usability Engineering", "Autonomy", "Mixed/Augmented Reality"],
  workPlace: ["Project Architecture", "Software Implementation", "Project Management Tools", "Analyst", "Task Management", "Communication Skills", "Analytical Skills", "MS Office"],
  certificates: ["Skill 10", "Skill 11", "Skill 12"]
};

function Skills() {
  const [mountContainerText, setMountContainerText] = useState("");
  const [isMountContainer, setIsMountContainer] = useState(false);

  const handleCategoryClick = (text) => {
    setMountContainerText(text);
    setIsMountContainer(true);
  };

  const handleCloseButtonClick = () => {
    setIsMountContainer(false);
  };

  return (
    <div className='skills-container'>
      <div className='skills-subheader'>
        <div className='skills-title'>Skills</div>
        <div className='skills-line' />
        <div className={`mount-skill-content-container ${isMountContainer ? 'mounted' : ''}`}>
          <div className='skills-button-container'>
            <button className="skills-close-button" onClick={handleCloseButtonClick}><CloseIcon fontSize='small' /></button>
          </div>
          <div className='technical-container'>
            {/* Technical */}
            {mountContainerText === "Technical" && (
              <div className="technical-skills">
                {skillsList.technical.map((skill, index) => (
                  <div key={index} className="technical-skill-item">
                    {skill}
                  </div>
                ))}
              </div>
            )}
            {mountContainerText === "Technical" && (
              <div className="technical-skills">
                {skillsList.techincalDesc.map((skill, index) => (
                  <div key={index} className="technical-skill-item-titles">
                    {skill}
                  </div>
                ))}
              </div>
            )}

            {/* Academic */}
            {mountContainerText === "Academic" && (
              <div className="academic-skills">
                <div className="technical-skill-item-titles main-title">BSc Computer Science</div>
                <div className="technical-skill-item-titles sub-title">Brunel University London</div>
                {skillsList.academic.map((skill, index) => (
                  <div key={index} className="technical-skill-item-titles">
                    {skill}
                  </div>
                ))}
              </div>
            )}

            {/* Work Place */}
            {mountContainerText === "Work Place" && (
              <div className="academic-skills">
                {skillsList.workPlace.map((skill, index) => (
                  <div key={index} className="technical-skill-item-titles">
                    {skill}
                  </div>
                ))}
              </div>
            )}

            {/* Certificates Place */}
            {mountContainerText === "Certificates" && (
              <div className="certificates-skills">
                <div className='certificate-header'>Software Engineering Job Simulation - 2023</div>
                <div className='certificate-subheader'>JPMorgan Chase & Co</div>
                <ul>
                  <li><strong>Python, TypeScript and NPM:</strong> Used JPMorgan Chase’s open-source library called Perspective to generate a live graph that displays a data feed in a clear and visually appealing way for traders to monitor, utilising Python Pandas, NumPy, TypeScript and NPM.</li>
                  <li><strong>Git Bash:</strong> Utilised Git to fork and clone repositories to set up a local dev environment, downloading the necessary files, tools and dependencies.</li>
                </ul>

                <div className='certificate-header'>Google Cloud Run Course - 2023</div>
                <div className='certificate-subheader'>Google</div>

                <div/>

                <div className='certificate-header'>AWS Cloud Practitioner Essential Course - 2023</div>
                <div className='certificate-subheader'>Amazon</div>

                <div/>

                <div className='certificate-header'>Cybersecurity Virtual Experience Program - 2022</div>
                <div className='certificate-subheader'>MasterCard</div>
                
                <div/>
                
                <div className='certificate-header'>Virtual Engineering Program - 2021</div>
                <div className='certificate-subheader'>Goldman Sachs</div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className='skills-header'>
        <div className='skills-content-container'>
          <div className='mid-mount-continer'>


            
          </div>
          <div className='top-container'>
            <div className='top-left' onClick={() => { handleCategoryClick("Technical"); }}>
              Technical
              <div className='skill-container-line alt'></div>
              <div className='click-me'>Click Me</div>
            </div>
            <div className='top-right' onClick={() => { handleCategoryClick("Academic"); }}>
              Academic
              <div className='skill-container-line'></div>
              <div className='click-me'>Click Me</div>
            </div>
          </div>
          <div className='bottom-container'>
            <div className='bottom-left' onClick={() => { handleCategoryClick("Work Place"); }}>
              Work Place
              <div className='skill-container-line'></div>
              <div className='click-me'>Click Me</div>
            </div>
            <div className='bottom-right' onClick={() => { handleCategoryClick("Certificates"); }}>
              Certificates
              <div className='skill-container-line alt'></div>
              <div className='click-me'>Click Me</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
