import React, { Component } from 'react'

class AboutContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {

    return(
      <div id="about-me">
        <p>Prior experience in human resources and influencer marketing in both global corporations and small scale start ups. I'm interested in making a career jump to IT so I enrolled in an immersive 10 week full-stack boot camp that focuses on the technologies required to enter the market as an entry-level developer</p>

        <p>In my spare time, I love to cook, travel the world, and (write more) code.</p>
        <ul>
          Tech Skills:
          <li>Ruby/Ruby on Rails</li>
          <li>SQL/PostgreSQL</li>
          <li>Javascript/React</li>
          <li>HTML/CSS</li>
        </ul>

      </div>
    )
  }
}

export default AboutContainer;
