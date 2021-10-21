import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Link, navigate} from '@reach/router';

const View = (props) => {
    const [one, setOne] = useState({});
    const [loaded , setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/users/' + props.id)
        .then(res=>setOne(res.data.user))
        .catch(err=>console.log(err))
    }, [props.id]);

    const onDeleteHandler = (_id) => {
        axios.delete(`http://localhost:8000/api/users/delete/${_id}`)
            .then(res => {
                console.log(res)
                setLoaded(false)
            })
            .catch(err => console.log(err))
            navigate("/")
    }

    const onClickHandler = (_id) => {
        navigate(`update/${props.id}`)
    }
    
    return (
        <div>
            <h1 className="Header">Details about: {one.name} </h1>
            <button onClick={ () => onDeleteHandler(props.id)} className="btn btn-outline-danger">Adopt me!</button><Link to="/"><button className="btn btn-primary">Return to home page</button></Link>
            <table class="table table-dark">
                <thead>
                    <tr>
                        <th scope="col">Pet/type: </th>
                        <th scope="col">{one.type}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Description: </td>
                        <td>{one.description}</td>
                    </tr>
                    <tr>
                        <td>Skills: </td>
                        <td>{one.skills1} {one.skills2} {one.skills3}</td>
                    </tr>
                </tbody>
            </table>
            <button onClick={ () => onClickHandler(props.id)} className="btn btn-outline-info">Edit</button>
        </div>
    )
}
export default View;