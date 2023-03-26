import React from 'react';
import ResumeHeader from './ResumeHeader';
import ResumeWorkExperience from './ResumeWorkExperience';
import ResumeEducation from './ResumeEducation';
import ResumeSkills from './ResumeSkills';
import './Resume.css';

class Resume extends React.Component {
  render() {
    return (
      <div className="Resume" id="pdf">
        <ResumeHeader headerDetails={this.props.headerDetails} />
        <ResumeWorkExperience entries={this.props.entries} />
        <ResumeEducation educationDetails={this.props.educationDetails} />
        <ResumeSkills skillsDetails={this.props.skillsDetails} />
      </div>
    );
  }
}

export default Resume;
