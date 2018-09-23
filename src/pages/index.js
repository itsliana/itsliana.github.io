import React, { Component } from 'react';
// import Link from 'gatsby-link';
import classes from './index.module.scss';


import Contact from '../components/Contact/Contact';
import signature from '../../public/static/signature.svg';
import medusa from '../../public/static/medusa.svg';
import paper from '../../public/static/paper.png';

class IndexPage extends Component {
  constructor(props) {
    super(props);
  }
  
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  };
  
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  };
  
  handleScroll = (event) => {
    console.log(window.scrollY, event)
  };

  render() {
    return (
      <div onScroll={this.handleScroll} className={classes.container}>
        <div className={classes.paper}><img src={paper}></img></div>
        <div className={classes.portrait}><img src={medusa}></img></div>
        <div className={classes.signature}><img src={signature}></img></div>
        <Contact />
        {/* <Link to="/page-2/">Go to page 2</Link> */}
      </div>
    )
  }
}

export default IndexPage
