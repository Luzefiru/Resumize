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

  render() {
    const headerDetailsFunctions = {
      handleChangeFName: this.handleChangeFName,
      handleChangeLName: this.handleChangeLName,
      handleChangeEmail: this.handleChangeEmail,
      handleChangeTelNumber: this.handleChangeTelNumber,
      handleChangeLocation: this.handleChangeLocation,
    };

    return (
      <>
        <Header />
        <main>
          <Form
            headerDetailsFunctions={headerDetailsFunctions}
            headerDetails={this.state.headerDetails}
          />
          <Resume headerDetails={this.state.headerDetails} />
        </main>
      </>
    );
  }
}

export default App;
