import React, { Component } from 'react';
import classes from './index.module.scss';


import Contact from '../components/Contact/Contact';
import signature from '../../public/static/signature.svg';
import medusa from '../../public/static/medusa.svg';
import paper from '../../public/static/paper.png';

class IndexPage extends Component {
  constructor(props) {
    super(props);
    this.state={
      scrollPosition: null
    }
  }
  
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  };
  
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  };
  
  handleScroll = (event) => {
    this.setState({ scrollPosition: window.scrollY})

  };

  render() {
    const shrinkOn = 10;
    let height = [];
    if (this.state.scrollPosition > shrinkOn) {
      height.push(classes.minimize)
    }

    return (
      <div onScroll={this.handleScroll} className={classes.container}>
        <div className={classes.paper}><img src={paper}></img></div>
        <div className={classes.portrait}><img src={medusa}></img></div>
        <div className={classes.signature}><img className={height} src={signature}></img></div>
        <Contact />
      </div>
    )
  }
}

export default IndexPage
