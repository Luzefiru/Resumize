import React from 'react';
import './ResumeSkills.css';

class ResumeEducation extends React.Component {
  constructor(props) {
    super(props);

    this.generateSkillEntries = this.generateSkillEntries.bind(this);
  }

  generateSkillEntries(entries) {
    return (
      <ul className="ResumeSkills__entry__skill">
        <li>
          <span className="ResumeSkills__entry__skill__heading">
            Certifications:&nbsp;
          </span>
          Add relevant certifications for the job.
        </li>
        <li>
          <span className="ResumeSkills__entry__skill__heading">
            Skills:&nbsp;
          </span>
          Strategic planning; recruiting; revenue modeling & forecasting; retail
          partnerships, sales, & distro; contract negotiations; Amazon
          marketing; channel marketing; crowdfunding; DTC marketing;
          copywriting; logistics
        </li>
        <li>
          <span className="ResumeSkills__entry__skill__heading">
            Interests:&nbsp;
          </span>
          Puns; sleeping; sustainability; politics; yoga; traveling; fishing;
          Reddit; beer; Seinfeld
        </li>
      </ul>
    );
  }

  render() {
    return (
      <div className="ResumeEducation">
        <div className="ResumeEducation__title">
          CERTIFICATIONS, SKILLS, INTERESTS
        </div>
        <hr />
        {this.generateSkillEntries()}
      </div>
    );
  }
}

export default ResumeEducation;
