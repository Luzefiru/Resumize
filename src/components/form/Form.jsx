import React from 'react';
import './Form.css';

class Form extends React.Component {
  render() {
    return (
      <div className="Form">
        <form className="form--heading">
          <fieldset>
            <legend>Contact Details</legend>
            <label for="fName">First Name: </label>
            <input type="text" name="fName" id="fName" />
            <label for="lName">Last Name: </label>
            <input type="text" name="lName" id="lName" />
            <label for="email">Email Address: </label>
            <input type="email" name="email" id="email" />
            <label for="phone">Phone Number: </label>
            <input type="tel" name="phone" id="phone" />
            <label for="location">Location: </label>
            <input type="text" name="location" id="location" />
            <button type="submit">Submit</button>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default Form;
