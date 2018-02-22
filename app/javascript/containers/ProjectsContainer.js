import React, { Component } from 'react'

import { Player } from 'video-react';

class ProjectsContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {

    return(
      <div id="projects">
        <p>Habit Tracker</p>
        <Player
          playsInline
          src="/assets/habit-tracker.mp4"
          className="video"
        />

      </div>
    )
  }
}

export default ProjectsContainer;
