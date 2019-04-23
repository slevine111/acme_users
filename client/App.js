import React, { Fragment } from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
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
          <Switch>
            <Route exact path="/users/:id?" component={UsersPage} />
            <Route
              path="/users/search/:searchTerm/:id?"
              component={UsersPage}
            />
          </Switch>
        </Fragment>
      </HashRouter>
    </div>
  )
}

export default App
