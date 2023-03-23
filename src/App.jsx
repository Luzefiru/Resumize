import React from 'react';
import Header from './components/layout/Header';
import Resume from './components/resume/Resume';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <main>
          <Resume />
        </main>
      </div>
    );
  }
}

export default App;
