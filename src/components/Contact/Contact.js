import React from 'react';
import classes from './Contact.module.css';

const contact = () => (
  <div className={classes.Contact}>
    <p></p>
    <p><span>Liana Birke</span></p>
    <p><span>Front-end Web Developer</span></p>
    <p><span className={classes.email}>liana.birke@gmail.com</span></p>
    <p><span>View my </span><a href="//www.linkedin.com/in/liana-birke-997328ba/" target="_blank" rel="noopener noreferrer">resume</a></p>
    <p><a href="//github.com/itsliana/itsliana.github.io" target="_blank" rel="noopener noreferrer">About</a><span> this site</span></p>
    <p><span>View my </span><a href="//github.com/itsliana/german-this" target="_blank" rel="noopener noreferrer">last project</a></p>
    <p><span>It's about a </span><a href="//www.instagram.com/bull.child/" target="_blank" rel="noopener noreferrer">mood</a></p>
  </div>
)

export default contact;