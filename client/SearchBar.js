import React, { Component } from 'react'

class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchTerm: this.props.searchTerm || '',
      originalSearchTerm: this.props.searchTerm || ''
    }
    this.findSearchResults = this.findSearchResults.bind(this)
    this.clearSearchResults = this.clearSearchResults.bind(this)
  }

  componentDidUpdate(prevProps) {
    const { searchTerm } = this.props
    if (prevProps.searchTerm !== searchTerm) {
      this.setState({ searchTerm, originalSearchTerm: searchTerm })
    }
  }

  findSearchResults() {
    this.props.history.push(`/users/search/${this.state.searchTerm}`)
  }

  clearSearchResults() {
    this.props.history.push('/users')
  }

  render() {
    const { findSearchResults, clearSearchResults } = this
    const { searchTerm, originalSearchTerm } = this.state
    return (
      <div className="input-group">
        <input
          className="form-control"
          type="text"
          value={searchTerm}
          name="searchTerm"
          onChange={({ target }) =>
            this.setState({ [target.name]: target.value })
          }
          onKeyPress={({ which }) => {
            if (which === 13) findSearchResults()
          }}
          placeholder="Enter Search Term"
        />
        <div className="input-group-append">
          <button
            type="button"
            className="btn btn-primary"
            onClick={findSearchResults}
            disabled={searchTerm === '' || searchTerm === originalSearchTerm}
          >
            Go
          </button>
          <button
            type="button"
            className="btn btn-info"
            onClick={clearSearchResults}
            disabled={!this.props.searchTerm}
          >
            Clear
          </button>
        </div>
      </div>
    )
  }
}

export default SearchBar
