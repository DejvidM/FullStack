import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthorForm from "./AuthorForm";
import axios from "axios";

const Add = () => {
    
    const [author , setAuthor] = useState({
        name : ''
    });
    const navigate = useNavigate();
    const [errors , setErrors] = useState();
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/authors', author)
            .then(res =>{ console.log(res) ;  navigate('/')})
            .catch(err => setErrors(err.response.data.errors.name.message))
    }

    return (
        <>
        <Link to={'/'}>Home</Link>
        <p>Add a new author : </p>
        <AuthorForm addAuthor={handleSubmit} author={author} setAuthor={setAuthor} errors={errors}></AuthorForm>
        </>
    )
}

export default Add