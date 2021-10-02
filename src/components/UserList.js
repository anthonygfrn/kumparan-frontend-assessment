import React from 'react';
import axios from 'axios';

export default class PersonList extends React.Component {
    state = {
        user: []
    }

    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then(res => {
                const user = res.data;
                this.setState({
                    user
                });
            })
    }

    render() {
        return (
            <div className="row mx-0 mt-4 justify-content-center">
                { this.state.user.map(user =>
                    <div className="col-lg-4 col-md-6 mb-1 p-2 text-center" key={user.id}>
                        <div className="border border-primary p-3 h-100">
                            <h5>
                                {user.name}
                            </h5>
                            <p>
                                Username: @{user.username}
                            </p>
                            <p>
                                <small className="text-muted">
                                    <h6>Address: </h6>
                                    {user.address.street} {user.address.suite}, {user.address.city}
                                    <br/>Lat : {user.address.geo.lat} Long : {user.address.geo.lng}
                                </small>
                            </p>
                        </div>
                    </div>
                )}
            </div>
        )
    }
}