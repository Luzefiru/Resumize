import React from 'react';
import ResumeHeader from './ResumeHeader';
import './Resume.css';

class Resume extends React.Component {
  constructor(props) {
    super(props);

    this.fName = 'Christian';
    this.lName = 'de Jesus';
    this.email = 'luzefiru@gmail.com';
    this.telNumber = '238-0838';
    this.location = 'Cebu City, Cebu, Philippines';
    this.headerInfo = {
      fName: this.fName,
      lName: this.lName,
      email: this.email,
      telNumber: this.telNumber,
      location: this.location,
    };
  }
  render() {
    return (
      <div className="Resume">
        <ResumeHeader headerInfo={this.headerInfo} />
      </div>
    );
  }
}

export default Resume;
