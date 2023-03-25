import React from 'react';
import ResumeHeader from './ResumeHeader';
import ResumeWorkExperience from './ResumeWorkExperience';
import ResumeEducation from './ResumeEducation';
import ResumeSkills from './ResumeSkills';
import './Resume.css';

class Resume extends React.Component {
  render() {
    return (
      <div className="Resume">
        <ResumeHeader headerDetails={this.props.headerDetails} />
        <ResumeWorkExperience />
        <ResumeEducation />
        <ResumeSkills skillsDetails={this.props.skillsDetails} />
      </div>
    );
  }
}

export default Resume;
