import React from 'react';
import UserLayout from './UserLayout';
import { Link } from 'react-router-dom';
import Button from '../../components/ui/Button';

function UserList(props) {
    return (
        <UserLayout>
            {props.users.map((user) => (
                <div
                    className="col-lg-4 col-md-6 mb-1 p-2 text-center"
                    key={user.id}
                >
                    <div className="border border-dark p-3 h-100">
                        <h5>{user.name}</h5>
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
                        <div className="row mx-0 mt-4">
                            <div className="col-6">
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
                                        See Comment(s)
                                    </Link>
                                </Button>
                            </div>
                            <div className="col-6">
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
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </UserLayout>
    );
}

export default UserList;
