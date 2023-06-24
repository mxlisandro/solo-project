import React, { useEffect, useState } from 'react';

const TreeRender = () => {
    const [users, setUsers] = useState([])
  
    const fetchTreeData = () => {
      fetch("/addTree/trees")
        .then(response => {
          return response.json()
        })
        .then(data => {
          setUsers(data)
        })
    }
    useEffect(() => {
        fetchUserData()
      }, [])
    
    return (
      <div>
        {users.map(user => (
            <li key={user.id}>{user.name}</li>))}
      </div>
    );
  }
  
  export default TreeRender;