import React from 'react';
import './Footer.css';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

function Footer() {
  return <footer>GO M🕌SQUE &copy; Mahamud Aden, 2023

{/* <p>Visit my: <a href="https://www.linkedin.com/in/mahamudaden//"target='_blank' >Linkedin </a></p> 
     <br />
      <p>Visit my: <a href="https://github.com/mahamudadn" target='_blank' >Github </a></p> */}
  </footer>;
}

export default Footer;
