import React from 'react';
import './Form.css';

class Form extends React.Component {
  render() {
    return (
      <div className="Form">
        <form className="form--heading">
          <fieldset>
            <legend>Header Details</legend>
            <label htmlFor="fName">First Name: </label>
            <input
              onChange={this.props.headerDetailsFunctions.handleChangeFName}
              type="text"
              name="fName"
              id="fName"
              value={this.props.headerDetails.fName}
            />
            <label htmlFor="lName">Last Name: </label>
            <input
              onChange={this.props.headerDetailsFunctions.handleChangeLName}
              type="text"
              name="lName"
              id="lName"
              value={this.props.headerDetails.lName}
            />
            <label htmlFor="email">Email Address: </label>
            <input
              onChange={this.props.headerDetailsFunctions.handleChangeEmail}
              type="email"
              name="email"
              id="email"
              value={this.props.headerDetails.email}
            />
            <label htmlFor="phone">Phone Number: </label>
            <input
              onChange={this.props.headerDetailsFunctions.handleChangeTelNumber}
              type="tel"
              name="phone"
              id="phone"
              value={this.props.headerDetails.telNumber}
            />
            <label htmlFor="location">Location: </label>
            <input
              onChange={this.props.headerDetailsFunctions.handleChangeLocation}
              type="text"
              name="location"
              id="location"
              value={this.props.headerDetails.location}
            />
            {/* <button type="button" onClick={this.handleSubmitHeaderDetails}>
              Submit
            </button> */}
          </fieldset>
        </form>
      </div>
    );
  }
}

export default Form;
