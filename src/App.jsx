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
      educationDetails: {
        university: 'University Name',
        degree: 'Degree (e.g., BS), Majors (e.g., Computer Science)',
        graduationDate: '2018-07-22',
        location: 'City, Country',
        honors: 'Honors, awards, titles, or GPA.',
        events: 'Participation in any major events.',
        extracurriculars: 'Extracurricular organizations and activities.',
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

  handleChangeUniversity = (e) => {
    this.setState({
      educationDetails: {
        ...this.state.educationDetails,
        university: e.target.value,
      },
    });
  };

  handleChangeDegree = (e) => {
    this.setState({
      educationDetails: {
        ...this.state.educationDetails,
        degree: e.target.value,
      },
    });
  };

  handleChangeGraduationDate = (e) => {
    this.setState({
      educationDetails: {
        ...this.state.educationDetails,
        graduationDate: e.target.value,
      },
    });
  };

  handleChangeEducationLocation = (e) => {
    this.setState({
      educationDetails: {
        ...this.state.educationDetails,
        location: e.target.value,
      },
    });
  };

  handleChangeHonors = (e) => {
    this.setState({
      educationDetails: {
        ...this.state.educationDetails,
        honors: e.target.value,
      },
    });
  };

  handleChangeEvents = (e) => {
    this.setState({
      educationDetails: {
        ...this.state.educationDetails,
        events: e.target.value,
      },
    });
  };

  handleChangeExtracurriculars = (e) => {
    this.setState({
      educationDetails: {
        ...this.state.educationDetails,
        extracurriculars: e.target.value,
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

    const skillsDetailsFunctions = {
      handleChangeCertifications: this.handleChangeCertifications,
      handleChangeSkills: this.handleChangeSkills,
      handleChangeInterests: this.handleChangeInterests,
    };

    const educationDetailsFunctions = {
      handleChangeUniversity: this.handleChangeUniversity,
      handleChangeDegree: this.handleChangeDegree,
      handleChangeGraduationDate: this.handleChangeGraduationDate,
      handleChangeEducationLocation: this.handleChangeEducationLocation,
      handleChangeHonors: this.handleChangeHonors,
      handleChangeEvents: this.handleChangeEvents,
      handleChangeExtracurriculars: this.handleChangeExtracurriculars,
    };

    return (
      <>
        <Header />
        <main>
          <div className="main__form-container">
            <Form
              headerDetailsFunctions={headerDetailsFunctions}
              headerDetails={this.state.headerDetails}
              skillsDetailsFunctions={skillsDetailsFunctions}
              skillsDetails={this.state.skillsDetails}
              educationDetailsFunctions={educationDetailsFunctions}
              educationDetails={this.state.educationDetails}
            />
          </div>
          <Resume
            headerDetails={this.state.headerDetails}
            skillsDetails={this.state.skillsDetails}
            educationDetails={this.state.educationDetails}
          />
        </main>
      </>
    );
  }
}

export default App;
