import React from 'react'
import Hilite from './Hilite'

const UsersTable = ({ users, searchTerm }) => {
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
                      <Hilite searchTerm={searchTerm} string={userField} />
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
