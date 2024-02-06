import axios, { all } from "axios"
import React, { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom";

const AllProductDisplay = ({allProducts , setAllProducts}) => {

    const navigate = useNavigate();
    const handleDelete = (parameter) =>{
        axios.delete(`http://localhost:8000/api/${parameter}`)
            .then(res => console.log(res))
            .catch(err => console.log(err))
        setAllProducts(allProducts.filter( (item) => item.title != parameter))
    }
    return (
        <>  
            {allProducts.length > 0 
            ?  <>{ allProducts.map((product,index) => 
                <div style={{width : 'fit-content',margin : '0px auto', display : 'flex' , alignItems : 'center'}}  key={product._id}>
                <Link to={`/api/details/${product.title}`}><p style={{marginRight :'20px'}}>{product.title}</p> 
                </Link>
                <button onClick={() => handleDelete(product.title)}>Delete</button>
                <button onClick={() => navigate(`/edit/${product.title}`) }>Edit</button>
                </div>   
            )}</>
            : ''
            }
        </>
    )
}

export default AllProductDisplay