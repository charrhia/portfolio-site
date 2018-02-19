import React, { Component } from 'react'

class ContactContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {

    return(
      <div id="contact-me">
        <p>Want to chat? Feel free to email me at
          <a href="mailto:charlotte.smith93@gmail.com?Subject=Hello" target="_top"> charlotte.smith93@gmail.com</a>
        </p>

        <div className="icons">
          <span>
            <a href="https://github.com/charrhia">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/charlottersmith/">
          <i className="fab fa-linkedin"></i>
        </a>
      </span>
    </div>

  </div>
)
}
}

export default ContactContainer;
