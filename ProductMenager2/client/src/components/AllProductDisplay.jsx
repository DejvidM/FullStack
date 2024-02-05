import axios from "axios"
import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom";

const AllProductDisplay = ({allProducts , setAllProducts}) => {

    return (
        <>  
            {allProducts.length > 0
            ?  <>{ allProducts.map((product,index) => 
                <Link to={`/api/details/${product.title}`} key={product._id}>  <p  style={{textAlign : 'center'}}> {product.title}</p> </Link>   
            )}</>
            : ''
            }
        </>
    )
}

export default AllProductDisplay