import React from 'react'

const UserItem = ({ user }) => {
  return (
    <>
      <tr>
        <th scope='row'>{user.id}</th>
        <td>{user.name}</td>
        <td>{user.phone}</td>
        <td>{user.website}</td>
      </tr>
    </>
  )
}

export default UserItem
