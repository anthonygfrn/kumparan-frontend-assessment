import PageContainer from '../../components/layout/Container'
import UserList from '../../components/ui/User/UserList'
import axios from 'axios'
import React, { useState, useEffect } from 'react'

function App() {
    const [userList, setUser] = useState([])

    useEffect(() => {
        // Your code here
        axios.get(`https://jsonplaceholder.typicode.com/users`).then((res) => {
            setUser(res.data)
        }, [])
    })

    return (
        <PageContainer>
            <h2>List of Users</h2>
            <UserList users={userList} />
        </PageContainer>
    )
}

export default App
