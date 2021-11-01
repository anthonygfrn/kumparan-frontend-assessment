import PageContainer from '../../components/layout/Container';
import Title from '../../components/layout/Title';
import UserList from '../../components/ui/User/UserList';
import React, { useEffect } from 'react';
import UserLayout from '../../components/ui/User/UserLayout';
import { useDispatch, useSelector } from 'react-redux';
import { getListUsers } from '../../actions/UserAction';

function App() {
    const { getListUsersResult, getListUsersLoading, getListUsersError } =
        useSelector((state) => state.userReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getListUsers());
    }, [dispatch]);

    return (
        <PageContainer>
            <UserLayout>
                <Title title={'List of Users'} />
                {getListUsersResult ? (
                    <UserList users={getListUsersResult} />
                ) : getListUsersLoading ? (
                    <p>Loading... </p>
                ) : (
                    <p>
                        {getListUsersError ? getListUsersError : 'Data Kosong'}
                    </p>
                )}
            </UserLayout>
        </PageContainer>
    );
}

export default App;
