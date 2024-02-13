import axios, { all } from "axios";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
const AuthorsDisplay = ({allAuthors , setAllAuthors}) => {

    const handleDelete = (id) => {
        axios.delete(`http://localhost:8000/authors/${id}`)
            .then(res => console.log(res))
            .catch(err => console.log(err))
        setAllAuthors(allAuthors.filter((author) => author._id != id))
    }
    const navigate = useNavigate()
    return (    
        <>
        <Link to={'/authors/new'}>Add an author</Link>
        <p>We have qutoes by : </p>
        {allAuthors.length > 0
        ? <> 
        <table>
            <thead>
                <tr>
                    <th>Author</th>
                    <th>Actions aviable</th>
                </tr>
            </thead>
            <tbody>
                {}
                {allAuthors.map( (author) => 
                    <tr key={author._id}>
                        <td>{author.name}</td>
                        <td> <button onClick={()=> navigate(`/authors/${author._id}/edit`)}>Edit</button> <button onClick={() => handleDelete(author._id)}>Delete</button></td>
                    </tr>)}
                
                
            </tbody>
        </table> </>
        : ''}
        </>
    )
}

export default AuthorsDisplay