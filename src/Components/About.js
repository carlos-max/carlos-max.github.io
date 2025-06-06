import React, { Component } from "react";
import Fade from "react-reveal";

class About extends Component {
  render() {
    if (!this.props.data) return null;

    const aboutMe = this.props.data.labels.home;
    const contactInfo = this.props.data.labels.about;
    const name = this.props.data.name;
    const profilepic = "images/" + this.props.data.image;
    const bio = this.props.data.bio;
    const city = this.props.data.address.city;
    const state = this.props.data.address.state;
    const phone = this.props.data.phone;
    const email = this.props.data.email;

    return (
      <section id="about">
        <Fade duration={1000}>
          <div className="row">
            <div className="three columns">
              <img                
                src={profilepic}
                alt="Max"
              />
            </div>
            <div className="nine columns main-col">
              <h2>{aboutMe}</h2>

              <p style={{ whiteSpace: 'pre-line' }}>{bio}</p>
              <div className="row">
                <div className="columns contact-details">
                  <h2>{contactInfo}</h2>
                  <p className="address">
                    <span>{name}</span>
                    <br />
                    <span>                      
                      {city}, {state}
                    </span>
                    <br />
                    <span>{phone}</span>
                    <br />
                    <span>{email}</span>
                  </p>
                </div>                
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default About;
