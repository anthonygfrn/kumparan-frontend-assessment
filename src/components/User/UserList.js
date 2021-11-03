import React from 'react';
import UserLayout from './UserLayout';
import { Link } from 'react-router-dom';
import Button from '../../components/ui/Button';
import Column from '../layout/Column';
import ContentCard from '../ui/ContentCard';
import Container from '../layout/Container';
import Text from '../ui/Text';

function UserList(props) {
    return (
        <UserLayout>
            {props.users.map((user) => (
                <Column
                    variant="col-lg-4 col-md-6 mb-1 p-2 text-center"
                    key={user.id}
                >
                    <ContentCard variant="border border-dark p-3 h-100">
                        <Text variant="h5">{user.name}</Text>
                        <p>Username: @{user.username}</p>
                        <div>
                            <small className="text-muted">
                                <>Address: </>
                                {user.address.street} {user.address.suite},{' '}
                                {user.address.city}
                                <br />
                                Lat : {user.address.geo.lat} Long :{' '}
                                {user.address.geo.lng}
                            </small>
                        </div>
                        <Container variant="row mx-0 mt-4">
                            <Column variant="col-6">
                                <Button variant="btn btn-success btn-outline-dark  btn-sm">
                                    <Link
                                        to={{
                                            pathname: `/posts/${user.id}`,
                                        }}
                                        style={{
                                            textDecoration: 'none',
                                            color: 'white',
                                        }}
                                    >
                                        See Post(s)
                                    </Link>
                                </Button>
                            </Column>
                            <Column variant="col-6">
                                <Button variant="btn btn-success btn-outline-dark  btn-sm">
                                    <Link
                                        to={{
                                            pathname: `/albums/${user.id}`,
                                            state: { member: user.id },
                                        }}
                                        style={{
                                            textDecoration: 'none',
                                            color: 'white',
                                        }}
                                    >
                                        &nbsp;Albums
                                    </Link>
                                </Button>
                            </Column>
                        </Container>
                    </ContentCard>
                </Column>
            ))}
        </UserLayout>
    );
}

export default UserList;
