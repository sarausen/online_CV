import "./style.css"
import "./skillsrange"
import Resume from "./skillsrange"

export const ResumePage = () => {
  return (
    <div className="main">
      <div className="content_block">
        <h2>My Resume</h2>
        <p className="resume_profession" >I am considering a change of profession towards frontend development. I have completed courses in HTML / CSS / JS / React and am looking for an opportunity to put my knowledge into practice. Ready to complete a test task to demonstrate the level of skills.</p>
        <h3>Skills</h3>
        < Resume />
        <h3>Expierience</h3>
        <p className="resume_expierience">09/2012 - 10/2022</p>
        <p>Economist</p>
        <h3>Education</h3>
        <p className="resume_education">2007 - 2012 Academy of Public Administration under the President of the Kyrgyz Republic</p>
        <p>Accounting, analysis and audit</p>
        <h3>Extra Education</h3>
       <p className="extra_education">2011 - 2012 Certified Accounting Practitioner (CAP)</p>
       <p className="extra_education">2022 UX/UI Design</p>
       <p className="extra_education">2023 Bootcamp JavaScript</p>
     </div>
   </div>

  
  )
}