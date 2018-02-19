import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import IndexContainer from './containers/IndexContainer'
import ProjectsContainer from './containers/ProjectsContainer'
import BlogContainer from './containers/BlogContainer'
import AboutContainer from './containers/AboutContainer'
import ContactContainer from './containers/ContactContainer'

const App = (props) => {

  return(
    <Router history={browserHistory}>
      <Route path='/' component={IndexContainer} />
      <Route path='/home' component={IndexContainer} />
      <Route path='/projects' component={ProjectsContainer} />
      <Route path='/blog' component={BlogContainer} />
      <Route path='/about' component={AboutContainer} />
      <Route path='/contact' component={ContactContainer} />
    </Router>
  )}

  export default App;
