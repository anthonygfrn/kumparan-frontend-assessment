import PageContainer from '../../components/layout/Container';
import Title from '../../components/ui/Title';
import UserList from '../../components/User/UserList';
import React, { useEffect } from 'react';
import UserLayout from '../../components/User/UserLayout';
import { useDispatch, useSelector } from 'react-redux';
import { getListUsers } from '../../actions/UserAction';
import { Link } from 'react-router-dom';

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
                <Title title={'List of Users'} variant="h2" />{' '}
                <Link to="/" className="btn btn-primary w-100 mt-3">
                    Return to dashboard
                </Link>
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
