import React, { Component } from 'react'
import axios from 'axios'
import UsersTable from './UsersTable'
import SearchBar from './SearchBar'
import Pager from './Pager'

class UsersPage extends Component {
  constructor() {
    super()
    this.state = {
      count: 0,
      users: []
    }
  }

  componentDidMount() {
    return this.loadData(this.props.location.pathname)
  }

  componentDidUpdate(prevProps) {
    const { location } = this.props
    if (prevProps.location.pathname !== location.pathname) {
      return this.loadData(location.pathname)
    }
  }

  loadData(route) {
    return axios
      .get(`https://acme-users-api.herokuapp.com/api${route}`)
      .then(({ data }) => this.setState(data))
  }

  render() {
    const {
      history,
      location: { pathname }
    } = this.props
    const routerParam = Number(/[0-9]*$/.exec(pathname)[0])
    const searchTerm =
      pathname.match(/(?:search\/)(.+)(?:\/)/) ||
      pathname.match(/(?:search\/)(.+)$/)
    const maxRouteId = Math.floor(this.state.count / 50)

    return (
      <div>
        <div>
          {this.state.count} Results. Page {routerParam + 1} of {maxRouteId + 1}
        </div>
        <Pager
          routerParam={routerParam}
          maxRouteId={maxRouteId}
          loadData={this.loadData}
          history={history}
          pathname={pathname}
        />
        <SearchBar
          history={history}
          searchTerm={searchTerm ? searchTerm[1] : ''}
        />
        <UsersTable users={this.state.users} />
      </div>
    )
  }
}

export default UsersPage
