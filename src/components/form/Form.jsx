import React from 'react';
import './Form.css';
import FormHeader from './FormHeader';
import FormEducation from './FormEducation';
import FormSkills from './FormSkills';
import PlusBox from '../../res/plus-box.svg';

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.toggleEditHeaderDetails = this.toggleEditHeaderDetails.bind(this);
    this.toggleEditSkillsDetails = this.toggleEditSkillsDetails.bind(this);
  }

  toggleEditHeaderDetails() {
    document.querySelector('.header').classList.toggle('hide');
    document
      .querySelector('.btn--edit-header-details')
      .classList.toggle('hide');
  }

  toggleEditSkillsDetails() {
    document.querySelector('.skills').classList.toggle('hide');
    document
      .querySelector('.btn--edit-skills-details')
      .classList.toggle('hide');
  }

  toggleEditEducationDetails() {
    document.querySelector('.education').classList.toggle('hide');
    document
      .querySelector('.btn--edit-education-details')
      .classList.toggle('hide');
  }

  render() {
    return (
      <div className="Form">
        <button
          onClick={this.toggleEditHeaderDetails}
          type="button"
          className="btn btn--edit-header-details"
        >
          <img
            className="btn__plus"
            alt="Edit Header Button"
            src={PlusBox}
          ></img>
          Edit Header
        </button>
        <FormHeader
          headerDetails={this.props.headerDetails}
          headerDetailsFunctions={this.props.headerDetailsFunctions}
          toggleEditHeaderDetails={this.toggleEditHeaderDetails}
        />

        <button
          onClick={this.toggleEditSkillsDetails}
          type="button"
          className="btn btn--edit-skills-details"
        >
          <img
            className="btn__plus"
            alt="Edit Skills Button"
            src={PlusBox}
          ></img>
          Edit Skills
        </button>
        <FormSkills
          skillsDetails={this.props.skillsDetails}
          skillsDetailsFunctions={this.props.skillsDetailsFunctions}
          toggleEditSkillsDetails={this.toggleEditSkillsDetails}
        />

        <button
          onClick={this.toggleEditEducationDetails}
          type="button"
          className="btn btn--edit-education-details"
        >
          <img
            className="btn__plus"
            alt="Edit Education Button"
            src={PlusBox}
          ></img>
          Edit Education
        </button>
        <FormEducation
          educationDetails={this.props.educationDetails}
          educationDetailsFunctions={this.props.educationDetailsFunctions}
          toggleEditEducationDetails={this.toggleEditEducationDetails}
        />

        <button
          onClick={this.props.exportToPdfFunction}
          type="button"
          className="btn"
        >
          <img
            className="btn__plus"
            alt="Export to PDF Button"
            src={PlusBox}
          ></img>
          Export as .pdf
        </button>
      </div>
    );
  }
}

export default Form;
