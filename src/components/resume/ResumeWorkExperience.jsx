import React from 'react';
import './ResumeWorkExperience.css';

class ResumeWorkExperience extends React.Component {
  constructor(props) {
    super(props);

    this.generateWorkExperienceEntries =
      this.generateWorkExperienceEntries.bind(this);
  }

  // creates entries for the work experience entries
  generateWorkExperienceEntries(arr) {
    return (
      <div className="ResumeWorkExperience__entry">
        <header className="ResumeWorkExperience__entry__header">
          <div className="ResumeWorkExperience__entry__header__company">
            ACME Corporation
          </div>
          <div className="ResumeWorkExperience__entry__header__position">
            Founder & CEO
          </div>
          <div className="ResumeWorkExperience__entry__header__duration">
            {`${'Oct. 2017'} - ${'Present'}`}
          </div>
          <div className="ResumeWorkExperience__entry__header__location">
            City, Country
          </div>
        </header>
        <ul className="ResumeWorkExperience__entry__responsibilities">
          <li className="responsibilities__responsibility">
            Core responsibility #1.
          </li>
          <li className="responsibilities__responsibility">
            Core responsibility #2.
          </li>
          <li className="responsibilities__responsibility">
            Core responsibility #3.
          </li>
        </ul>
      </div>
    );
  }

  render() {
    return (
      <div className="ResumeWorkExperience">
        <div className="ResumeWorkExperience__title">WORK EXPERIENCE</div>
        <hr />
        {this.generateWorkExperienceEntries(this.props.entries)}
        {this.generateWorkExperienceEntries(this.props.entries)}
      </div>
    );
  }
}

export default ResumeWorkExperience;
