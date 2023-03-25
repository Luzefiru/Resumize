import React from 'react';
import './Form.css';
import FormHeader from './FormHeader';
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

  render() {
    return (
      <div className="Form">
        <button
          onClick={this.toggleEditHeaderDetails}
          type="button"
          className="btn btn--edit-header-details"
        >
          <img className="btn__plus" alt="Edit Button" src={PlusBox}></img>
          Edit Header Details
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
          <img className="btn__plus" alt="Edit Button" src={PlusBox}></img>
          Edit Skills Details
        </button>
        <FormSkills
          skillsDetails={this.props.skillsDetails}
          skillsDetailsFunctions={this.props.skillsDetailsFunctions}
          toggleEditSkillsDetails={this.toggleEditSkillsDetails}
        />
      </div>
    );
  }
}

export default Form;
