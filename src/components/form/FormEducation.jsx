import React from 'react';
import FormField from './FormField';

class FormEducation extends React.Component {
  render() {
    return (
      <form className="form education hide">
        <fieldset>
          <legend>Education Details</legend>
          <FormField
            label="University: "
            onChange={
              this.props.educationDetailsFunctions.handleChangeUniversity
            }
            type="text"
            name="university"
            id="university"
            value={this.props.educationDetails.university}
          />
          <FormField
            label="Degree: "
            onChange={this.props.educationDetailsFunctions.handleChangeDegree}
            type="text"
            name="degree"
            id="degree"
            value={this.props.educationDetails.degree}
          />
          <FormField
            label="Graduation Date: "
            onChange={
              this.props.educationDetailsFunctions.handleChangeGraduationDate
            }
            type="month"
            name="graduationDate"
            id="graduationDate"
            value={this.props.educationDetails.graduationDate}
          />
          <FormField
            label="Location: "
            onChange={
              this.props.educationDetailsFunctions.handleChangeEducationLocation
            }
            type="text"
            name="educationLocation"
            id="educationLocation"
            value={this.props.educationDetails.location}
          />
          <FormField
            label="Honors: "
            onChange={this.props.educationDetailsFunctions.handleChangeHonors}
            type="text"
            name="honors"
            id="honors"
            value={this.props.educationDetails.honors}
          />
          <FormField
            label="Event Participation: "
            onChange={this.props.educationDetailsFunctions.handleChangeEvents}
            type="text"
            name="events"
            id="events"
            value={this.props.educationDetails.events}
          />
          <FormField
            label="Extracurriculars: "
            onChange={
              this.props.educationDetailsFunctions.handleChangeExtracurriculars
            }
            type="text"
            name="extracurriculars"
            id="extracurriculars"
            value={this.props.educationDetails.extracurriculars}
          />
          <button type="button" onClick={this.props.toggleEditEducationDetails}>
            Save
          </button>
        </fieldset>
      </form>
    );
  }
}

export default FormEducation;
