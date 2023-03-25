import React from 'react';
import './ResumeEducation.css';

class ResumeEducation extends React.Component {
  constructor(props) {
    super(props);

    this.generateEducationEntry = this.generateEducationEntry.bind(this);
  }

  generateEducationEntry() {
    return (
      <div className="ResumeEducation__entry">
        <header className="ResumeEducation__entry__header">
          <div className="ResumeEducation__entry__header__university">
            University Name
          </div>
          <div className="ResumeEducation__entry__header__degree">
            Degree (e.g., BS), Majors (e.g., Computer Science)
          </div>
          <div className="ResumeEducation__entry__header__graduation-date">
            {`${'Graduation Month'}, ${'Year'}`}
          </div>
          <div className="ResumeEducation__entry__header__location">
            City, Country
          </div>
        </header>
        <ul className="ResumeEducation__entry__responsibilities">
          <li className="responsibilities__responsibility">
            Honors, awards, titles, or GPA.
          </li>
          <li className="responsibilities__responsibility">
            Participation in any major events.
          </li>
          <li className="responsibilities__responsibility">
            Extracurricular organizations and activities.
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
