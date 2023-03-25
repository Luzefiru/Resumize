import React from 'react';
import FormField from './FormField';

class FormEducation extends React.Component {
  render() {
    return (
      <form className="form education hide">
        <fieldset>
          <legend>Education Details</legend>
          <button type="button" onClick={this.props.toggleEditEducationDetails}>
            Save
          </button>
        </fieldset>
      </form>
    );
  }
}

export default FormEducation;
