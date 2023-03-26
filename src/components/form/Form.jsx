import React from 'react';
import './Form.css';
import FormHeader from './FormHeader';
import FormEducation from './FormEducation';
import FormSkills from './FormSkills';
import PlusBox from '../../res/plus-box.svg';
import DownloadBox from '../../res/download-box.svg';
import FormWorkExperience from './FormWorkExperience';

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.toggleEditHeaderDetails = this.toggleEditHeaderDetails.bind(this);
    this.toggleAddWork = this.toggleAddWork.bind(this);
    this.toggleEditSkillsDetails = this.toggleEditSkillsDetails.bind(this);
    this.toggleEditEducationDetails =
      this.toggleEditEducationDetails.bind(this);
  }

  toggleEditHeaderDetails() {
    document.querySelector('.header').classList.toggle('hide');
    document
      .querySelector('.btn--edit-header-details')
      .classList.toggle('hide');
  }

  toggleAddWork() {
    document.querySelector('.work').classList.toggle('hide');
    document.querySelector('.btn--add-work').classList.toggle('hide');
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
          onClick={this.toggleAddWork}
          type="button"
          className="btn btn--add-work"
        >
          <img
            className="btn__plus"
            alt="Add Work Experience Button"
            src={PlusBox}
          ></img>
          Add Work Experience
        </button>
        <FormWorkExperience
          toggleAddWork={this.toggleAddWork}
          addWorkEntry={this.props.addWorkEntry}
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
          className="btn btn--export-to-pdf"
        >
          <img
            className="btn__download"
            alt="Edit Education Button"
            src={DownloadBox}
          ></img>
          Save as PDF
        </button>
      </div>
    );
  }
}

export default Form;
