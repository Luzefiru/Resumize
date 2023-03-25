import React from 'react';
import Header from './components/layout/Header';
import Resume from './components/resume/Resume';
import Form from './components/form/Form';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      headerDetails: {
        fName: 'Christian',
        lName: 'de Jesus',
        email: 'luzefiru@gmail.com',
        telNumber: '238-0838',
        location: 'Cebu City, Cebu, Philippines',
      },
      skillsDetails: {
        certifications: 'Add relevant certifications for the job.',
        skills:
          'Strategic planning; recruiting; revenue modeling & forecasting.',
        interests: 'Puns; sleeping; sustainability; politics; yoga; traveling.',
      },
    };
  }

  handleChangeFName = (e) => {
    this.setState({
      headerDetails: { ...this.state.headerDetails, fName: e.target.value },
    });
  };

  handleChangeLName = (e) => {
    this.setState({
      headerDetails: { ...this.state.headerDetails, lName: e.target.value },
    });
  };

  handleChangeEmail = (e) => {
    this.setState({
      headerDetails: { ...this.state.headerDetails, email: e.target.value },
    });
  };

  handleChangeTelNumber = (e) => {
    this.setState({
      headerDetails: { ...this.state.headerDetails, telNumber: e.target.value },
    });
  };

  handleChangeLocation = (e) => {
    this.setState({
      headerDetails: { ...this.state.headerDetails, location: e.target.value },
    });
  };

  handleChangeCertifications = (e) => {
    this.setState({
      skillsDetails: {
        ...this.state.skillsDetails,
        certifications: e.target.value,
      },
    });
  };

  handleChangeSkills = (e) => {
    this.setState({
      skillsDetails: {
        ...this.state.skillsDetails,
        skills: e.target.value,
      },
    });
  };

  handleChangeInterests = (e) => {
    this.setState({
      skillsDetails: {
        ...this.state.skillsDetails,
        interests: e.target.value,
      },
    });
  };

  render() {
    const headerDetailsFunctions = {
      handleChangeFName: this.handleChangeFName,
      handleChangeLName: this.handleChangeLName,
      handleChangeEmail: this.handleChangeEmail,
      handleChangeTelNumber: this.handleChangeTelNumber,
      handleChangeLocation: this.handleChangeLocation,
    };

    const skillsDetails = {
      handleChangeLocation: this.handleChangeLocation,
      handleChangeCertifications: this.handleChangeCertifications,
      handleChangeInterests: this.handleChangeInterests,
    };

    return (
      <>
        <Header />
        <main>
          <div className="main__form-container">
            <Form
              headerDetailsFunctions={headerDetailsFunctions}
              headerDetails={this.state.headerDetails}
              label="Edit Header Details"
            />
            <Form
              headerDetailsFunctions={headerDetailsFunctions}
              headerDetails={this.state.headerDetails}
              label="Edit Skills Details"
            />
          </div>
          <Resume headerDetails={this.state.headerDetails} />
        </main>
      </>
    );
  }
}

export default App;
