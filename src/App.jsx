import React from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Resume from './components/resume/Resume';
import Form from './components/form/Form';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import './App.css';
import { db } from './firebase-config';
import { doc, setDoc, getDoc } from 'firebase/firestore';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      headerDetails: {
        fName: 'Christian',
        lName: 'de Jesus',
        email: 'luzefiru@gmail.com',
        telNumber: '(032) 957-0103',
        location: 'Cebu City, Cebu, Philippines',
      },
      entries: [
        {
          company: 'ACME Corporation',
          duration: 'Oct. 2017 - Present',
          position: 'Founder & CEO',
          location: 'City, Country',
          responsibility1: 'Core Responsibility #1.',
          responsibility2: 'Core Responsibility #2.',
          responsibility3: 'Core Responsibility #3.',
        },
      ],
      educationDetails: {
        university: 'University Name',
        degree: 'Degree (e.g., BS), Majors (e.g., Computer Science)',
        graduationDate: '2010-02',
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

    this.addWorkEntry = this.addWorkEntry.bind(this);
    this.deleteWorkEntry = this.deleteWorkEntry.bind(this);
  }

  componentDidMount() {
    // gets the resume data and re-renders the page accordingly
    getFormData(this.props.userID, this.state, this.setState.bind(this));
  }

  componentDidUpdate() {
    // saves the resume data into the Firebase Firestore for future retrieval
    setFormData(this.props.userID, this.state);
  }

  addWorkEntry(entry) {
    this.setState({ entries: [entry, ...this.state.entries] });
  }

  deleteWorkEntry(targetIndex) {
    this.setState((prevState) => {
      return { entries: prevState.entries.filter((_, i) => i !== targetIndex) };
    });
  }

  createPDF = async () => {
    const pdf = new jsPDF('portrait', 'px', [1056, 816]); // A4 paper sizing in pixels
    const data = await html2canvas(document.querySelector('#pdf'));
    const img = data.toDataURL('image/png');
    const imgProperties = pdf.getImageProperties(img);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;
    pdf.addImage(img, 'PNG', 0, 0, pdfWidth, pdfHeight);
    const name = `${this.state.headerDetails.fName}_${this.state.headerDetails.lName}`;
    pdf.save(`${name}_Resume_by_Resumize.pdf`);
  };

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
              exportToPdfFunction={this.createPDF}
              addWorkEntry={this.addWorkEntry}
              entries={this.state.entries}
            />
          </div>
          <Resume
            headerDetails={this.state.headerDetails}
            entries={this.state.entries}
            skillsDetails={this.state.skillsDetails}
            educationDetails={this.state.educationDetails}
            deleteWorkEntry={this.deleteWorkEntry}
          />
        </main>
        <Footer />
      </>
    );
  }
}

export default App;

/**
 * Fetches data from the Firestore service and sets the state to the corresponding data.
 *
 * @param {string} userID - the unique User ID of the current authenticated user
 * @param {object} state - the current state of the resume to save in setFormData
 * @param {function} setState - the this.setState function to update form data with
 */
async function getFormData(userID, state, setState) {
  const docSnapshot = await getDoc(doc(db, `resumes/${userID}`));
  if (docSnapshot.exists()) {
    // display the data of the firestore's resume to the current window
    setState(docSnapshot.data());
  } else {
    // otherwise use the default template to create the resume in the Firestore Database
    setFormData(userID, state);
  }
}

/**
 * Sets the userID as a key to a value containing an object with the form data.
 *
 * @param {string} userID - the unique User ID of the current authenticated user
 * @param {object} state - the current state of the resume to save
 */
async function setFormData(userID, state) {
  await setDoc(doc(db, `resumes/${userID}`), state);
}
