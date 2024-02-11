import axios from "axios"
import React, { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom";

const AllProductDisplay = ({allProducts , deleteButton}) => {

    const navigate = useNavigate();

    return (
        <>  
            {allProducts.length > 0 
            ?  <>{ allProducts.map((product,index) => 
                <div style={{width : 'fit-content',margin : '0px auto', display : 'flex' , alignItems : 'center'}}  key={product._id}>
                <Link to={`/api/details/${product.title}`}><p style={{marginRight :'20px'}}>{product.title}</p> 
                </Link>
                <button onClick={() => deleteButton(product.title)}>Delete</button>
                <button onClick={() => navigate(`/edit/${product.title}`) }>Edit</button>
                </div>   
            )}</>
            : ''
            }
        </>
    )
}

export default AllProductDisplay