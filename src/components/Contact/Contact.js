import React from 'react';
import classes from './Contact.module.css';

const contact = () => (
  <div className={classes.Contact}>
    <p></p>
    <p><span>Liana Sanders</span></p>
    <p><span>Software Engineer</span></p>
    <p><span>Sometimes I draw</span></p>
    <p><span className={classes.email}>liana.sndrs@gmail.com</span></p>
    <p><a href="//www.linkedin.com/in/lianasanders/" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
    <p><a href="//github.com/itsliana" target="_blank" rel="noopener noreferrer">github</a></p>
    <p><span>My </span><a href="//www.instagram.com/meat__bag/" target="_blank" rel="noopener noreferrer">I am meatbag</a></p>
  </div>
)

export default contact;
