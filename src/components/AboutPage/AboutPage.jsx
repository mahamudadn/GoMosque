import React from 'react';
import './AboutPage.css';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div className="container about-page">
      <h3>Introduction</h3>
      <ul>
        <li>Name: My name is Mahamud</li>
        <li> Cohort: Diomond Cohort</li>
        <li>My App: Prayer Tracking App</li>
      </ul>
      <h3>What This App Solves</h3>
      <ul>
        <li>Track your mosque prayers</li>
        <li> Evaluate Yourself</li>
        <li>Make decisons based on your performance</li>
  
      </ul>
      <h3>Demonistration</h3>
      <ul>
        <li>Login/Register </li>
        <li> Home Page</li>
        <li>Add your prayers at the end of the day</li>
        <li>See Your 7 days mosque prayer history</li>
      </ul>
      <h3>Languages Used</h3>
      <ul>
        <li>React, Redux, Node, Express, PostgreSQL,  JavaScript </li>
      </ul>
      <h3>Challenges </h3>
      <ul>
        <li>Changing The idea into App</li>
        <li> adding bar chart to my app</li>
      
      </ul>
      <h3>Next Step</h3>
      <ul>
        <li>adding Prayer Times </li>
        <li>Quran reading Record</li>
        <li>My App: Prayer Tracking App</li>
      
      </ul>
      <h3> Thanks</h3>
      <ul>
        <li>Prime </li>
        <li> My instructors: Liz, Dane, Emma</li>
        <li>My Diomond Cohort</li>
   
      </ul>
      
      
    </div>
  );
}

export default AboutPage;
