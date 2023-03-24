import React from 'react';
import './Form.css';
import FormHeader from './FormHeader';

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.toggleEditHeaderDetails = this.toggleEditHeaderDetails.bind(this);
  }

  toggleEditHeaderDetails() {
    document.querySelector('.form--header').classList.toggle('hide');
    document
      .querySelector('.btn--edit-header-details')
      .classList.toggle('hide');
  }

  render() {
    return (
      <div className="Form">
        <button
          onClick={this.toggleEditHeaderDetails}
          type="button"
          className="btn--edit-header-details"
        >
          + Edit Header Details
        </button>
        <FormHeader
          headerDetails={this.props.headerDetails}
          headerDetailsFunctions={this.props.headerDetailsFunctions}
          toggleEditHeaderDetails={this.toggleEditHeaderDetails}
        />
      </div>
    );
  }
}

export default Form;
