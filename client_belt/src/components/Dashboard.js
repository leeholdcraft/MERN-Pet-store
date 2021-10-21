import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Link} from '@reach/router';

const AllUsers = (props) => {
    const [users, setUsers] = useState([]);
    const [loaded, setLoaded] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/users")
            .then(res=> {
                setUsers(res.data.users)
                setLoaded(true);
            })
            .catch(err=>console.log(err))
    },[loaded])


    return (
        <div>
            <h1 className="Header">Pet Shelter: </h1>
            <h3>These pets are looking for a good home!</h3>
            <Link to="/api/users/new"><button className="btn btn-primary">Add a new pet to the shelter!</button></Link>
            <table className="table table-dark table-hover table-striped table-bordered">
                <thead>
                    <tr>
                        <th scope="col">Name: </th>
                        <th scope="col">Type: </th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>

                    </tr>
                        {
                        users.map((item, key) => {
                            return <tr key={key}>
                                        <td>{item.name}</td>
                                        <td><p>{item.type}</p></td>
                                        <td><Link to={`/api/users/update/${item._id}`}><button className="btn btn-success">Edit</button></Link>
                                        <Link to={`/api/users/${item._id}`}><button className="btn btn-primary">Details</button></Link>
                                        </td>
                                    </tr>
                    })
                }
                    
                </tbody>
            </table>
        </div>
    )
}
export default AllUsers;