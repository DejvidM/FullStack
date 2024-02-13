import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import AuthorForm from "./AuthorForm";
import axios from "axios";

const Edit = () => {
    const {_id} = useParams();
    const navigate = useNavigate();
    const [errors , setErrors] = useState();
    const [ unknown , setUnknown] = useState('');
    const [author , setAuthor] = useState({
        name : ''
    })

    useEffect(() => {
        axios.get(`http://localhost:8000/authors/${_id}`)
            .then(res =>  setAuthor({...author , name : res.data.name}))
            .catch(err => setUnknown(true))
    }, [])

    const handleEdit = (e) => {
        e.preventDefault();
        axios.patch(`http://localhost:8000/authors/${_id}` ,author)
            .then(res =>{ setAuthor({...author , name : res.data.name});  navigate('/');})
            .catch(err => setErrors(err.response.data.errors.name.message))

    } 
    return(
        <>
        {unknown ?
        <>
        <h1>We re sorry but we couldnt find what you are loking for. Do you want to add the author?</h1>
        <Link to={'/authors/new'}>Add an author</Link>;
        </>
        :
        <>
        <Link to={'/'}>Home</Link>
        <p>Edit this author : </p>
        <AuthorForm author={author} setAuthor={setAuthor} addAuthor={handleEdit} errors={errors}></AuthorForm>
        </>
        }
        </>
        
    )
}

export default Edit