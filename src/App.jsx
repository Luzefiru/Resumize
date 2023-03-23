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

    this.onSubmitHeaderDetails = this.onSubmitHeaderDetails.bind(this);
  }

  // sets the current state's headerDetails to the passed in argument's newHeaderDetails
  onSubmitHeaderDetails(newHeaderDetails) {
    const { fName, lName, email, telNumber, location } = newHeaderDetails;
    this.setState({
      headerDetails: {
        fName: fName,
        lName: lName,
        email: email,
        telNumber: telNumber,
        location: location,
      },
    });
  }

  render() {
    return (
      <>
        <Header />
        <main>
          <Form onSubmitHeaderDetails={this.onSubmitHeaderDetails} />
          <Resume headerDetails={this.state.headerDetails} />
        </main>
      </>
    );
  }
}

export default App;
