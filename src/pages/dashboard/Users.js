import PageContainer from '../../components/layout/Container';
import Title from '../../components/layout/Title';
import React, { useEffect } from 'react';
import { useAppState } from '../../context/appState';
import { getUsersList } from '../../actions/usersAction';
import UserList from '../../components/ui/User/UserList';

function App() {
    const [state, dispatch] = useAppState();
    const { getUsersResult } = state;

    useEffect(() => {
        getUsersList(dispatch);
    }, [dispatch]);

    return (
        <PageContainer>
            <Title title={'List of Users'} />
            {getUsersResult ? <UserList users={getUsersResult} /> : ''}
        </PageContainer>
    );
}

export default App;
