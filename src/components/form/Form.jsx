import React from 'react';
import './Form.css';
import FormHeader from './FormHeader';

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmitHeaderDetails = this.handleSubmitHeaderDetails.bind(this);
  }

  handleSubmitHeaderDetails() {
    document.querySelector('.form--header').classList.toggle('hide');
  }

  render() {
    return (
      <div className="Form">
        <FormHeader
          headerDetails={this.props.headerDetails}
          headerDetailsFunctions={this.props.headerDetailsFunctions}
          handleSubmitHeaderDetails={this.handleSubmitHeaderDetails}
        />
      </div>
    );
  }
}

export default Form;
