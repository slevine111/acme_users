import React from 'react'
import Hilite from './Hilite'
import { Route } from 'react-router-dom'

const UsersTable = ({ users }) => {
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Middle Name</th>
          <th>Email</th>
          <th>Title</th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => {
          const { id, firstName, lastName, middleName, email, title } = user
          return (
            <tr key={id}>
              {[firstName, lastName, middleName, email, title].map(
                (userField, index) => {
                  return (
                    <td key={index}>
                      <Route
                        exact
                        path="/users/:id?"
                        render={() => <div>{userField}</div>}
                      />
                      <Route
                        path="/users/search/:searchTerm/:id?"
                        render={({ match: { params } }) => (
                          <Hilite
                            searchTerm={params.searchTerm}
                            string={userField}
                          />
                        )}
                      />
                    </td>
                  )
                }
              )}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default UsersTable
