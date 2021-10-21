import React, {useEffect, useState} from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import {Link,navigate} from '@reach/router';

const Edit = (props) => {
    const [update, setUpdate] = useState({});

    const [errors, setErrors] = useState({});
    
    const onSubmitHandler = event => {
        event.preventDefault();
        axios.put(`http://localhost:8000/api/users/update/${props.id}`, update)
        .then(res => {
            console.log(res);
            if(res.data.user){
                navigate('/');
            }
            else{
                setErrors(res.data.error.errors);
            }
        })
        .catch(err => console.log(err))
    }
    
    const onChangeHandler = event => {
        setUpdate({
            ...update,
            [event.target.name]: event.target.value
        })
    }

    useEffect(() => {
        axios.get('http://localhost:8000/api/users/' + props.id)
            .then(res=>setUpdate(res.data.user))
            .catch(err=>console.log(err))
    },[props.id])

        
    return (
    <div>
        <div className="Header">
        <h1>Pet Shelter: </h1>
        <h3>Edit {update.name} </h3></div>
        <form onSubmit={onSubmitHandler}>
            <div className="input-group mb-3 d-flex justify-content-center">
                <span className="input-group-text" id="inputGroup-sizing-default">Pet's name: </span>
                <input type="text" name="name" className="form-control col-sm-5 " onChange={(event)=>onChangeHandler(event)} aria-label="Sizing example input" value={update.name} aria-describedby="inputGroup-sizing-default"/>
                {errors.name ? <span className="alert alert-danger">{errors.name.message}</span> :"" }
            </div>
            <div className="input-group mb-3 d-flex justify-content-center">
                <span className="input-group-text" id="inputGroup-sizing-default">Type: </span>
                <input type="text" name="type" className="form-control col-sm-5 " onChange={(event)=>onChangeHandler(event)} aria-label="Sizing example input" value={update.type} aria-describedby="inputGroup-sizing-default"/>
                {errors.name ? <span className="alert alert-danger">{errors.name.message}</span> :"" }
            </div>
            <div className="input-group mb-3 d-flex justify-content-center">
                <span className="input-group-text" id="inputGroup-sizing-default">Description: </span>
                <input type="text" name="description" className="form-control col-sm-5 " onChange={(event)=>onChangeHandler(event)} aria-label="Sizing example input" value={update.description} aria-describedby="inputGroup-sizing-default"/>
                {errors.name ? <span className="alert alert-danger">{errors.name.message}</span> :"" }
            </div>
            <div className="input-group mb-3 d-flex justify-content-center">
                <span className="input-group-text" id="inputGroup-sizing-default">Skills: </span>
                <input type="text" name="skills1" className="form-control col-sm-5 " onChange={(event)=>onChangeHandler(event)} aria-label="Sizing example input" value={update.skills1} aria-describedby="inputGroup-sizing-default"/>
                <input type="text" name="skills2" className="form-control col-sm-5 " onChange={(event)=>onChangeHandler(event)} aria-label="Sizing example input" value={update.skills2} aria-describedby="inputGroup-sizing-default"/>
                <input type="text" name="skills3" className="form-control col-sm-5 " onChange={(event)=>onChangeHandler(event)} aria-label="Sizing example input" value={update.skills3} aria-describedby="inputGroup-sizing-default"/>
            </div>
            <Link to='/'><button type="submit" class= "btn btn-outline-danger">Cancel</button></Link>
            <button type="submit" class="btn btn-primary">Update pet</button>
        </form>
    </div>
    );
}
export default Edit;