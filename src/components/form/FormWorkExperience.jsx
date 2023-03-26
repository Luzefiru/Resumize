import React from 'react';
import FormField from './FormField';

class FormWorkExperience extends React.Component {
  appendToDOM = () => {
    this.props.toggleAddWork();
    const [company, position, duration, location, core1, core2, core3] = [
      document.querySelector('#workCompany'),
      document.querySelector('#workPosition'),
      document.querySelector('#workDuration'),
      document.querySelector('#workLocation'),
      document.querySelector('#workCore1'),
      document.querySelector('#workCore2'),
      document.querySelector('#workCore3'),
    ];

    this.props.addWorkEntry({
      company: company.value,
      duration: duration.value,
      position: position.value,
      location: location.value,
      responsibility1: core1.value,
      responsibility2: core2.value,
      responsibility3: core3.value,
    });

    [
      company.value,
      duration.value,
      position.value,
      location.value,
      core1.value,
      core2.value,
      core3.value,
    ] = ['', '', '', '', '', '', ''];
  };

  render() {
    return (
      <form className="form work hide">
        <fieldset>
          <legend>Work Experience Entry</legend>
          <FormField
            label="Company: "
            type="text"
            name="workCompany"
            id="workCompany"
          />
          <FormField
            label="Position: "
            type="text"
            name="workPosition"
            id="workPosition"
          />
          <FormField
            label="Duration: "
            type="text"
            name="workDuration"
            id="workDuration"
          />
          <FormField
            label="Location: "
            type="text"
            name="workLocation"
            id="workLocation"
          />
          <FormField
            label="Core Responsibility #1: "
            type="text"
            name="workCore1"
            id="workCore1"
          />
          <FormField
            label="Core Responsibility #2: "
            type="text"
            name="workCore2"
            id="workCore2"
          />
          <FormField
            label="Core Responsibility #3: "
            type="text"
            name="workCore3"
            id="workCore3"
          />
          <button type="button" onClick={this.appendToDOM}>
            Add
          </button>
        </fieldset>
      </form>
    );
  }
}

export default FormWorkExperience;
