import React, { Component } from 'react'

class Pager extends Component {
  constructor() {
    super()
    this.goToRoute = this.goToRoute.bind(this)
  }

  goToRoute(requestedId) {
    const { history, pathname } = this.props
    history.push(`${pathname.match(/^.+[^/0-9]/)[0]}/${requestedId}`)
  }

  render() {
    const { goToRoute } = this
    const { routerParam, maxRouteId } = this.props
    return (
      <div>
        {' '}
        <button
          type="button"
          className="btn btn-info"
          onClick={() => goToRoute(0)}
          disabled={routerParam === 0}
        >
          First
        </button>
        <button
          type="button"
          className="btn btn-info"
          onClick={() => goToRoute(routerParam - 1 >= 0 ? routerParam - 1 : 0)}
          disabled={routerParam === 0}
        >
          Prev
        </button>
        <button type="button" className="btn btn-primary">
          {routerParam + 1}
        </button>
        <button
          type="button"
          className="btn btn-info"
          onClick={() => goToRoute(routerParam + 1)}
          disabled={routerParam === maxRouteId}
        >
          Next
        </button>
        <button
          type="button"
          className="btn btn-info"
          onClick={() => goToRoute(maxRouteId)}
          disabled={routerParam === maxRouteId}
        >
          Last
        </button>
      </div>
    )
  }
}

export default Pager
