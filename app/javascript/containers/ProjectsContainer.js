import React, { Component } from 'react'

// import { Player } from 'video-react';

class ProjectsContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {

    return(
      <div id="projects">
        <h3>Habit Tracker</h3>

        <p><a href="https://github.com/charrhia/habit-tracker"><i className="fab fa-github"></i></a> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae laoreet sem, vel rhoncus orci. Suspendisse blandit vehicula odio iaculis ornare. Vestibulum libero justo, pharetra sed nisl at, volutpat efficitur magna. Curabitur ut ipsum a nisl posuere mattis id blandit.</p>


        <h3>Floofer</h3>

        <p><a href="https://github.com/maxwelldevoe/Floofer"><i className="fab fa-github"></i></a> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae laoreet sem, vel rhoncus orci. Suspendisse blandit vehicula odio iaculis ornare. Vestibulum libero justo, pharetra sed nisl at, volutpat efficitur magna. Curabitur ut ipsum a nisl posuere mattis id blandit.</p>
      </div>
    )
  }
}

export default ProjectsContainer;
