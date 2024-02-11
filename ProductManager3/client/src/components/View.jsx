import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams,Link } from "react-router-dom";

const View = () => {

    const {title} = useParams();
    const [info , setInfo] = useState({});
    useEffect(()=> {
        axios.get(`http://localhost:8000/api/details/${title}`)
            .then( res => setInfo(res.data))
            .catch(err => console.log(err))
    },[])

    return (
        <>  
            {info 
            ? <div style={{width : 'fit-content' , margin : '0px auto'}}>
            <h1>Title of product :{info.title}</h1>
            <p>Price : {info.price}</p>
            <p>Description : {info.description}</p>
            </div>
            : <p>Waiting</p>}
            <Link to={'/'}>Go Back</Link>
        </>
    )
}

export default View