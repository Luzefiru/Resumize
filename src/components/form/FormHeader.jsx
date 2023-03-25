import React from 'react';
import FormField from './FormField';
import './FormHeader.css';

class FormHeader extends React.Component {
  render() {
    return (
      <form className="form--header hide">
        <fieldset>
          <legend>Header Details</legend>
          <FormField
            label="First Name: "
            onChange={this.props.headerDetailsFunctions.handleChangeFName}
            type="text"
            name="fName"
            id="fName"
            value={this.props.headerDetails.fName}
          />
          <FormField
            label="Last Name: "
            onChange={this.props.headerDetailsFunctions.handleChangeLName}
            type="text"
            name="lName"
            id="lName"
            value={this.props.headerDetails.lName}
          />
          <FormField
            label="Email Address: "
            onChange={this.props.headerDetailsFunctions.handleChangeEmail}
            type="email"
            name="email"
            id="email"
            value={this.props.headerDetails.email}
          />
          <FormField
            label="Phone Number: "
            onChange={this.props.headerDetailsFunctions.handleChangeTelNumber}
            type="tel"
            name="phone"
            id="phone"
            value={this.props.headerDetails.telNumber}
          />
          <FormField
            label="Location: "
            onChange={this.props.headerDetailsFunctions.handleChangeLocation}
            type="text"
            name="location"
            id="location"
            value={this.props.headerDetails.location}
          />
          <button type="button" onClick={this.props.toggleEditHeaderDetails}>
            Save
          </button>
        </fieldset>
      </form>
    );
  }
}

export default FormHeader;
