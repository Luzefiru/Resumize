import React from 'react';
import './ResumeHeader.css';

class ResumeHeader extends React.Component {
  render() {
    const { fName, lName, email, telNumber, location } = this.props.headerInfo;
    return (
      <div className="ResumeHeader">
        <div className="ResumeHeader__name">{fName + ' ' + lName}</div>
        <span className="ResumeHeader__subtext">{email} ❖ </span>
        <span className="ResumeHeader__subtext">{telNumber} ❖ </span>
        <span className="ResumeHeader__subtext">{location}</span>
        <hr />
      </div>
    );
  }
}

export default ResumeHeader;
