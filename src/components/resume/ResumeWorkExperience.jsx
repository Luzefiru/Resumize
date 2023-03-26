import React from 'react';
import './ResumeWorkExperience.css';

class ResumeWorkExperience extends React.Component {
  constructor(props) {
    super(props);

    this.generateWorkExperienceEntries =
      this.generateWorkExperienceEntries.bind(this);
    this.deleteEntry = this.deleteEntry.bind(this);
  }

  deleteEntry(e) {
    if (e.target === document.querySelector('.ResumeWorkExperience__entry')) {
      e.target.remove();
    } else if (
      e.target.parentElement ===
      document.querySelector('.ResumeWorkExperience__entry')
    ) {
      e.target.parentElement.remove();
    } else {
      e.target.parentElement.parentElement.remove();
    }
  }

  // creates entries for the work experience entries
  generateWorkExperienceEntries(entries) {
    const outputEntries = [];
    for (let entry of entries) {
      const newJSX = (
        <div className="ResumeWorkExperience__entry" onClick={this.deleteEntry}>
          <header className="ResumeWorkExperience__entry__header">
            <div className="ResumeWorkExperience__entry__header__company">
              {entry.company}
            </div>
            <div className="ResumeWorkExperience__entry__header__position">
              {entry.position}
            </div>
            <div className="ResumeWorkExperience__entry__header__duration">
              {entry.duration}
            </div>
            <div className="ResumeWorkExperience__entry__header__location">
              {entry.location}
            </div>
          </header>
          <ul className="ResumeWorkExperience__entry__responsibilities">
            <li className="responsibilities__responsibility">
              {entry.responsibility1}
            </li>
            <li className="responsibilities__responsibility">
              {entry.responsibility2}
            </li>
            <li className="responsibilities__responsibility">
              {entry.responsibility3}
            </li>
          </ul>
        </div>
      );

      outputEntries.push(newJSX);
    }
    return outputEntries;
  }

  render() {
    return (
      <div className="ResumeWorkExperience">
        <div className="ResumeWorkExperience__title">WORK EXPERIENCE</div>
        <hr />
        {this.generateWorkExperienceEntries(this.props.entries)}
      </div>
    );
  }
}

export default ResumeWorkExperience;
