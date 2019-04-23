import React, { Component } from 'react'
import axios from 'axios'
import UsersTable from './UsersTable'
import SearchBar from './SearchBar'

class UsersPage extends Component {
  constructor() {
    console.log('in constructor')
    super()
    this.state = {
      count: 0,
      users: []
    }
    this.goToRoute = this.goToRoute.bind(this)
  }

  componentDidMount() {
    return this.loadData(this.props.location.pathname)
  }

  componentDidUpdate(prevProps) {
    const {
      match: { params }
    } = this.props
    if (
      prevProps.match.params.id !== params.id ||
      prevProps.match.params.searchTerm !== params.searchTerm
    ) {
      return this.loadData(this.props.location.pathname)
    }
  }

  loadData(route) {
    return axios
      .get(`https://acme-users-api.herokuapp.com/api${route}`)
      .then(({ data }) => this.setState(data))
  }

  goToRoute(requestedId) {
    const {
      history,
      match: { params }
    } = this.props
    history.push(
      `/users/${
        params.searchTerm ? `search/${params.searchTerm}/` : ''
      }${requestedId}`
    )
  }

  render() {
    const { goToRoute } = this
    const {
      history,
      match: { params }
    } = this.props
    const routerParam = Number(params.id || 0)
    const maxRouteId = Math.floor(this.state.count / 50)
    const arrayOfButtons = [
      {
        label: 'First',
        type: 'info',
        onClickMethod: () => goToRoute(0),
        makeDisabled: routerParam === 0
      },
      {
        label: 'Prev',
        type: 'info',
        onClickMethod: () =>
          goToRoute(routerParam - 1 >= 0 ? routerParam - 1 : 0),
        makeDisabled: routerParam === 0
      },
      {
        label: routerParam + 1,
        type: 'primary',
        onClickMethod: () => {},
        makeDisabled: false
      },
      {
        label: 'Next',
        type: 'info',
        onClickMethod: () => goToRoute(routerParam + 1),
        makeDisabled: maxRouteId === routerParam
      },
      {
        label: 'Last',
        type: 'info',
        onClickMethod: () => goToRoute(maxRouteId),
        makeDisabled: maxRouteId === routerParam
      }
    ]

    return (
      <div>
        <div>
          {this.state.count} Results. Page {routerParam + 1} of {maxRouteId + 1}
        </div>
        {arrayOfButtons.map(button => {
          const { label, type, onClickMethod, makeDisabled } = button
          return (
            <button
              key={label}
              type="button"
              className={`btn btn-${type}`}
              onClick={onClickMethod}
              disabled={makeDisabled}
            >
              {label}
            </button>
          )
        })}
        <SearchBar history={history} searchTerm={params.searchTerm} />
        <UsersTable users={this.state.users} searchTerm={params.searchTerm} />
      </div>
    )
  }
}

export default UsersPage
