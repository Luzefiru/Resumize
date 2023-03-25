import React from 'react';
import FormField from './FormField';

class FormSkills extends React.Component {
  render() {
    return (
      <form className="form skills hide">
        <fieldset>
          <legend>Skills Details</legend>
          <FormField
            label="Certifications: "
            onChange={
              this.props.skillsDetailsFunctions.handleChangeCertifications
            }
            type="text"
            name="certs"
            id="certs"
            value={this.props.skillsDetails.certifications}
          />
          <FormField
            label="Skills: "
            onChange={this.props.skillsDetailsFunctions.handleChangeSkills}
            type="text"
            name="skills"
            id="skills"
            value={this.props.skillsDetails.skills}
          />
          <FormField
            label="Interests: "
            onChange={this.props.skillsDetailsFunctions.handleChangeInterests}
            type="interests"
            name="interests"
            id="interests"
            value={this.props.skillsDetails.interests}
          />
          <button type="button" onClick={this.props.toggleEditSkillsDetails}>
            Save
          </button>
        </fieldset>
      </form>
    );
  }
}

export default FormSkills;
