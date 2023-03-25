import React from 'react';
import './ResumeEducation.css';

class ResumeEducation extends React.Component {
  constructor(props) {
    super(props);

    this.generateEducationEntry = this.generateEducationEntry.bind(this);
  }

  generateEducationEntry() {
    const {
      university,
      degree,
      graduationDate,
      location,
      honors,
      events,
      extracurriculars,
    } = this.props.educationDetails;

    // generate the proper format for graduation date
    const rawDate = new Date(String(graduationDate));
    const monthChoices = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    const month = monthChoices[rawDate.getMonth()];
    const year = String(rawDate.getFullYear());

    return (
      <div className="ResumeEducation__entry">
        <header className="ResumeEducation__entry__header">
          <div className="ResumeEducation__entry__header__university">
            {university}
          </div>
          <div className="ResumeEducation__entry__header__degree">{degree}</div>
          <div className="ResumeEducation__entry__header__graduation-date">
            {month}, {year}
          </div>
          <div className="ResumeEducation__entry__header__location">
            {location}
          </div>
        </header>
        <ul className="ResumeEducation__entry__responsibilities">
          <li className="responsibilities__responsibility">{honors}</li>
          <li className="responsibilities__responsibility">{events}</li>
          <li className="responsibilities__responsibility">
            {extracurriculars}
          </li>
        </ul>
      </div>
    );
  }

  render() {
    return (
      <div className="ResumeEducation">
        <div className="ResumeEducation__title">EDUCATION</div>
        <hr />
        {this.generateEducationEntry()}
      </div>
    );
  }
}

export default ResumeEducation;
