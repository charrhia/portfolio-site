import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import IndexContainer from './containers/IndexContainer'
import ProjectsContainer from './containers/ProjectsContainer'
import AboutContainer from './containers/AboutContainer'
import ContactContainer from './containers/ContactContainer'

const App = (props) => {

  return(
    <Router history={browserHistory}>
      <Route path='/' component={ProjectsContainer} />
      <Route path='/home' component={ProjectsContainer} />
      <Route path='/projects' component={ProjectsContainer} />
      <Route path='/about' component={AboutContainer} />
      <Route path='/contact' component={ContactContainer} />
    </Router>
  )}

  export default App;
