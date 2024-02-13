import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import axios, { all } from 'axios'
import AuthorsDisplay from "./AuthorsDisplay";

const Home = () => {

    const [allAuthors , setAllAuthors] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/authors')
            .then( res => setAllAuthors(res.data.sort((a,b) => a.name > b.name ? 1 : -1)))
            .catch(err => console.log(err))
    }, [])

    
    return (
        <>
            <AuthorsDisplay allAuthors={allAuthors} setAllAuthors={setAllAuthors}/>
        </>
    )
}

export default Home