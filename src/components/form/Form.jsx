import React from 'react';
import './Form.css';

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmitHeaderDetails = this.handleSubmitHeaderDetails.bind(this);
  }

  handleSubmitHeaderDetails() {
    let fNameInput = document.querySelector('#fName');
    let lNameInput = document.querySelector('#lName');
    let emailInput = document.querySelector('#email');
    let telNumberInput = document.querySelector('#phone');
    let locationInput = document.querySelector('#location');

    this.props.onSubmitHeaderDetails({
      fName: fNameInput.value,
      lName: lNameInput.value,
      email: emailInput.value,
      telNumber: telNumberInput.value,
      location: locationInput.value,
    });

    [
      fNameInput.value,
      lNameInput.value,
      emailInput.value,
      telNumberInput.value,
      locationInput.value,
    ] = ['', '', '', '', ''];
  }

  render() {
    return (
      <div className="Form">
        <form className="form--heading">
          <fieldset>
            <legend>Header Details</legend>
            <label htmlFor="fName">First Name: </label>
            <input type="text" name="fName" id="fName" />
            <label htmlFor="lName">Last Name: </label>
            <input type="text" name="lName" id="lName" />
            <label htmlFor="email">Email Address: </label>
            <input type="email" name="email" id="email" />
            <label htmlFor="phone">Phone Number: </label>
            <input type="tel" name="phone" id="phone" />
            <label htmlFor="location">Location: </label>
            <input type="text" name="location" id="location" />
            <button type="button" onClick={this.handleSubmitHeaderDetails}>
              Submit
            </button>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default Form;
