import React from 'react';
import ResumeHeader from './ResumeHeader';
import './Resume.css';

class Resume extends React.Component {
  render() {
    return (
      <div className="Resume">
        <ResumeHeader headerDetails={this.props.headerDetails} />
      </div>
    );
  }
}

export default Resume;