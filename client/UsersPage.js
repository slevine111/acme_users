import React, { Component } from 'react'
import axios from 'axios'
import UsersTable from './UsersTable'

class UsersPage extends Component {
  constructor() {
    super()
    this.state = {
      count: 0,
      users: []
    }
    this.goToRoute = this.goToRoute.bind(this)
  }

  componentDidMount() {
    return this.loadData(this.props.match.params.id || '')
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      return this.loadData(this.props.match.params.id || '')
    }
  }

  loadData(apiId) {
    return axios
      .get(`https://acme-users-api.herokuapp.com/api/users/${apiId}`)
      .then(({ data }) => this.setState(data))
  }

  goToRoute(requestedId) {
    this.props.history.push(`/users/${requestedId}`)
  }

  render() {
    const { goToRoute } = this
    const routerParam = Number(this.props.match.params.id)
    const maxRouteId = Math.floor(this.state.count / 50)
    const arrayOfButtons = [
      {
        label: 'First',
        type: 'info',
        onClickMethod: () => goToRoute(0),
        makeDisabled: false
      },
      {
        label: 'Prev',
        type: 'info',
        onClickMethod: () => goToRoute(routerParam - 1),
        makeDisabled: false
      },
      {
        label: routerParam + 1 || 1,
        type: 'primary',
        onClickMethod: () => {},
        makeDisabled: false
      },
      {
        label: 'Next',
        type: 'info',
        onClickMethod: () => goToRoute(routerParam + 1 || 1),
        makeDisabled: maxRouteId === routerParam || 0
      },
      {
        label: 'Last',
        type: 'info',
        onClickMethod: () => goToRoute(maxRouteId),
        makeDisabled: maxRouteId === routerParam || 0
      }
    ]

    return (
      <div>
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

        <UsersTable users={this.state.users} />
      </div>
    )
  }
}

export default UsersPage
