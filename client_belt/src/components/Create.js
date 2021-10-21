import React, {useEffect, useState} from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import { Link,navigate } from '@reach/router';

const Form = (props) => {
    const [form, setForm] = useState({
        name: "",
        type: "",
        description: "",
        skills1: "",
        skills2: "",
        skills3: ""
    })

    const [errors, setErrors] = useState({});

    const onChangeHandler = event => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    }

    const onSubmitHandler = event => {
        event.preventDefault();
        console.log("**********************")
        axios.post("http://localhost:8000/api/users/new", form)
        .then(res => {
            console.log(res.data.user)
            if(res.data.user){
                navigate('/');
            }
            else{
                setErrors(res.data.error.errors);
            }
        })
        .catch(err => console.log(err))

}
        
    return (
    <div>
        <div className="Header">
        <h1>Pet Shelter</h1>
        <h2>Know a pet needing a forever home?</h2>
        <Link to="/"><button className="btn btn-success">Redirect back home</button></Link></div>
        <h3>Add a New User: </h3>
        <form onSubmit={onSubmitHandler}>
            <div className="input-group mb-3 d-flex justify-content-center">
                <span className="input-group-text" id="name">Pet's name:</span>
                <input type="text" name="name" className="form-control col-sm-5 " onChange={onChangeHandler} aria-label="Sizing example input" />
                {errors.name ? <span className="alert alert-danger">{errors.name.message}</span> :"" }
            </div>
            <div className="input-group mb-3 d-flex justify-content-center">
                <span className="input-group-text" id="type">Type: </span>
                <input type="text" name="type" className="form-control col-sm-5 " onChange={onChangeHandler} aria-label="Sizing example input" />
                {errors.type ? <span className="alert alert-danger">{errors.type.message}</span> :"" }
            </div>
            <div className="input-group mb-3 d-flex justify-content-center">
                <span className="input-group-text" id="type">Description: </span>
                <input type="text" name="description" className="form-control col-sm-5 " onChange={onChangeHandler} aria-label="Sizing example input" />
                {errors.description ? <span className="alert alert-danger">{errors.description.message}</span> :"" }
            </div>
            <div className="input-group mb-3 d-flex justify-content-center">
                <span className="input-group-text" id="type">Special skills: </span>
                <input type="text" name="skills1" className="form-control col-sm-5 " onChange={onChangeHandler} aria-label="Sizing example input" placeholder="optional 1"/>
                <input type="text" name="skills2" className="form-control col-sm-5 " onChange={onChangeHandler} aria-label="Sizing example input" placeholder="optional 2"/>
                <input type="text" name="skills3" className="form-control col-sm-5 " onChange={onChangeHandler} aria-label="Sizing example input" placeholder="optional 3"/>
            </div>
            <button type="submit" class="btn btn-primary">Add pet</button>
        </form>
    </div>
    );
}
export default Form;