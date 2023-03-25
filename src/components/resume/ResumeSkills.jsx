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
          {this.props.skillsDetails.certifications}
        </li>
        <li>
          <span className="ResumeSkills__entry__skill__heading">
            Skills:&nbsp;
          </span>
          {this.props.skillsDetails.skills}
        </li>
        <li>
          <span className="ResumeSkills__entry__skill__heading">
            Interests:&nbsp;
          </span>
          {this.props.skillsDetails.interests}
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
