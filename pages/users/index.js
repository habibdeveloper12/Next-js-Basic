import React, { useEffect, useState } from 'react'

function Users() {
  const [user, setUser] = useState([])
  const [text, setText] = useState('')
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  useEffect(() => {
    fetch('api')
      .then(res => res.json())
      .then(data => setUser(data))
  }, [])
  const loadUser = () => {
    fetch('api')
      .then(res => res.json())
      .then(data => setUser(data))
  }

  const handleClick = () => {
    fetch('api', {
      method: 'POST',
      body: JSON.stringify({
        id: Date().now,
        name: text,
        username: name,
        email: email,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
    loadUser()
  }
  const handleDelete = (e) => {

    fetch(`api/${e}`, {
      method: 'DELETE',
    })
    loadUser()
  }
  return (
    <div>Users
      <input type="text" onChange={(e) => setText(e.target.value)} />
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <input type="text" onChange={(e) => setEmail(e.target.value)} />
      <button type='submit' onClick={handleClick}>Add here</button>


      {
        user?.map(data => <>
          <h5>{data.name}</h5>
          <h6>{data.username}</h6>
          <p>{data.email}</p>
          <button type='submit' onClick={() => handleDelete(data.id)}>Delete</button>
          <hr />
        </>)
      }
    </div>
  )
}

export default Users