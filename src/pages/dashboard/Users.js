import PageContainer from '../../components/layout/Container';
import Title from '../../components/layout/Title';
import UserList from '../../components/ui/User/UserList';
import React, { useState, useEffect } from 'react';
import UserLayout from '../../components/ui/User/UserLayout';
import { getUser } from '../../services/HttpApi';

function App() {
    const [users, setUser] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const user = await getUser();
            setUser(user.data);
        };

        fetchData();
    }, []);

    return (
        <PageContainer>
            <UserLayout>
                <Title title={'List of Users'} />
                <UserList users={users} />
            </UserLayout>
        </PageContainer>
    );
}

export default App;
