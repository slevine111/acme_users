import React from 'react'

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
              <td>{firstName}</td>
              <td>{lastName}</td>
              <td>{middleName}</td>
              <td>{email}</td>
              <td>{title}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default UsersTable
