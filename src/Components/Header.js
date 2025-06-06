import React, { Component } from "react";
import ParticlesBg from "particles-bg";
import Fade from "react-reveal";
import ReactFlagsSelect from 'react-flags-select';

class Header extends Component {
  render() {
    if (!this.props.data) return null;

    const home = this.props.data.labels.home;
    const about = this.props.data.labels.about;
    const resume = this.props.data.labels.resume;
    const github = this.props.data.github;
    const linkedin = this.props.data.linkedin;
    const name = this.props.data.name;
    const description = this.props.data.description;

    return (
      <header id="home">             
        <ParticlesBg type="cobweb" color={'#5e6dd1'} bg={true} />

        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>

          <ul id="nav" className="nav">
            <li className="current">
              <a className="smoothscroll" href="#home">
                {home}
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#about">
                {about}
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#resume">
                {resume}
              </a>
            </li>   
            {/*
            <li>
              <ReactFlagsSelect
                countries={["US", "BR"]}
                customLabels={{"US": "EN-US", "BR": "PT-BR"}} 
                placeholder="Language"
                optionsSize={20}       
                selected={this.props.locale ? this.props.locale : 'US'}
                onSelect={code => this.props.changeLocale(code)}
              />
            </li>    
            */}     
          </ul>
        </nav>

        <div className="row banner">
          <div className="banner-text">
            <Fade bottom>
              <h1 className="responsive-headline">{name}</h1>
            </Fade>
            <Fade bottom duration={1200}>
              <h3>{description}</h3>
            </Fade>
            <hr />
            <Fade bottom duration={2000}>
              <ul className="social">                
                <a href={github} className="button btn github-btn">
                  <i className="fa fa-github"></i>Github
                </a>
                <a href={linkedin} className="button btn linkedin-btn">
                  <i className="fa fa-linkedin"></i>LinkedIn
                </a>
              </ul>
            </Fade>
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </header>
    );
  }
}

export default Header;
