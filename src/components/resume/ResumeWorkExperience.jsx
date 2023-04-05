import React from 'react';
import './ResumeWorkExperience.css';

class ResumeWorkExperience extends React.Component {
  constructor(props) {
    super(props);

    this.generateWorkExperienceEntries =
      this.generateWorkExperienceEntries.bind(this);
  }

  // creates entries for the work experience entries
  generateWorkExperienceEntries(entries) {
    const { deleteWorkEntry } = this.props;
    const outputEntries = [];
    let id = 0;
    for (let entry of entries) {
      const newJSX = (
        <div
          className="ResumeWorkExperience__entry"
          id={id}
          onClick={() => {
            deleteWorkEntry(id++);
          }}
        >
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
