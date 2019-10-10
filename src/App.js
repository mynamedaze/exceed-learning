import React from 'react';
//import logo from './logo.svg';
import './sass/style.scss';
import './App.scss';
import './components/login/index.scss';
import LoginForm from './components/login/index';

function App() {
  return (
    <section className="intro">
      <div className="wrapper">
        <div className="main-form-container">
          <LoginForm />
        </div>
      </div>
    </section>
  );
}

export default App;