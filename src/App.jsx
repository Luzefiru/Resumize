import React from 'react';
import Header from './components/layout/Header';
import Resume from './components/resume/Resume';
import Form from './components/form/Form';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <main>
          <Form />
          <Resume />
        </main>
      </>
    );
  }
}

export default App;
