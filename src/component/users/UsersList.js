import React from 'react'
import useFetch from '../../hooks/useFetch'
import UserItem from './UserItem'

const UsersList = () => {
  const { response, error, loading } = useFetch(
    'https://jsonplaceholder.typicode.com/users'
  )

  const renderItems =
    response &&
    response?.map((user) => {
      return <UserItem key={user.id} user={user} />
    })

  return (
    <div className='container'>
      <h1>Users List</h1>
      <table className='table'>
        <thead>
          <tr>
            <th scope='col'>#</th>
            <th scope='col'>Name</th>
            <th scope='col'>Phone</th>
            <th scope='col'>Website</th>
          </tr>
        </thead>
        <tbody>{renderItems}</tbody>
      </table>
    </div>
  )
}

export default UsersList
