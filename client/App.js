import React, { Fragment } from 'react'
import { HashRouter, Route } from 'react-router-dom'
import Navbar from './Navbar'
import UsersPage from './UsersPage'

const App = () => {
  return (
    <div className="container">
      <h4>Acme Users</h4>
      <HashRouter>
        <Fragment>
          <Route component={Navbar} />
          <Route
            exact
            path="/"
            render={() => <h6>The greatest acme project</h6>}
          />
          <Route path="/users" component={UsersPage} />
        </Fragment>
      </HashRouter>
    </div>
  )
}

export default App

//<Route exact path="/users/:id?" component={UsersPage} />
//<Route path="/users/search/:searchTerm/:id?" component={UsersPage} />
