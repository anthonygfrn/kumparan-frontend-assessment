import axios from "axios";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

function App() {
    const [user, setUser] = useState([]);

    useEffect(() => {
        // Your code here
        axios.get(`https://jsonplaceholder.typicode.com/users`).then((res) => {
            setUser(res.data);
        }, []);
    });

    return (
        <div className="container">
            <div className="row mx-0 mt-4 justify-content-center">
                <h2>List of Users</h2>
                {user.map((user) => (
                    <div
                        className="col-lg-4 col-md-6 mb-1 p-2 text-center"
                        key={user.id}
                    >
                        <div className="border border-primary p-3 h-100">
                            <h5>{user.name}</h5>
                            <p>Username: @{user.username}</p>
                            <p>
                                <small className="text-muted">
                                    <h6>Address: </h6>
                                    {user.address.street} {user.address.suite},{" "}
                                    {user.address.city}
                                    <br />
                                    Lat : {user.address.geo.lat} Long :{" "}
                                    {user.address.geo.lng}
                                </small>
                            </p>
                            <div className="row mx-0 mt-4">
                                <div className="col-6">
                                    <Link
                                        className="btn btn-block btn-outline-success btn-sm"
                                        to={{
                                            pathname: `/posts/${user.id}`,
                                        }}
                                    >
                                        <i className="fa fa-pencil fa-fw"></i>
                                        &nbsp;Posts
                                    </Link>
                                </div>
                                <div className="col-6">
                                    <Link
                                        className="btn btn-block btn-outline-danger btn-sm"
                                        to={{
                                            pathname: `/albums/${user.id}`,
                                            state: { member: user.id },
                                        }}
                                    >
                                        <i className="fa fa-pencil fa-fw"></i>
                                        &nbsp;Albums
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default App;
