import React, { Component } from 'react';

import classes from './App.module.css';

import Helmet from 'react-helmet';
import favicon from './assets/favicon.ico';
import Contact from './components/Contact/Contact';
import signature from './assets/signature.svg';
import medusa from './assets/medusa.svg';
import paper from './assets/paper.png';

class App extends Component {
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
      <React.Fragment>
        <Helmet
          title='Liana Birke | Web Developer'
          meta={[
            { name: 'description', content: 'Hi, I\'m Liana Birke. I\'m a Front-End Web Developer based in the East Coast. I do art on rare occasions.' },
            { name: 'keywords', content: 'front-end, web, development, developer, frontend, front-end web developer, web developer, frontend web developer, freelance, graphic, design' },
          ]}
          link={[
            { rel: 'shortcut icon', type: 'image/ico', href: `${favicon}` }
          ]}
        />
        <div onScroll={this.handleScroll} className={classes.container}>
          <div className={classes.background}></div>
          <div className={classes.paper}><img src={paper} alt="paper"></img></div>
          <div className={classes.portrait}><img src={medusa} alt="medusa being choked by her own hair"></img></div>
          <div className={classes.signature}><img className={height} src={signature} alt="Liana's signature"></img></div>
          <Contact />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
