import React, { useState } from "react";
import axios from 'axios';

const ProductForm = ({allProducts , setAllProducts}) => {
    const [product , setProduct] = useState({
        title : '' ,
        price : '' ,
        description : ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api', product )
            .then( res => console.log(res,res.data))
            .catch( err => console.log(err));
        setAllProducts([...allProducts , product]);
        setProduct({title : '' , price : '' , description : ''})
        }

    return(
        <form onSubmit={handleSubmit} style={{margin : '0px auto' , width : 'fit-content' , display : 'flex' , flexDirection : 'column',
                                                alignItems : 'center'}}>
            <h1>Product Menager</h1>
            <div>
                <label> Title : </label>
                <input type="text" value={product.title} onChange={(e)=> { setProduct({ ...product ,title : e.target.value   }) }}/>
            </div>
            <div>
                <label> Price: </label>
                <input type="number" value={product.price} onChange={(e)=> setProduct({...product , price : e.target.value})} />
            </div>
            <div>
                <label> Description : </label>
                <input type="text" value={product.description} onChange={(e)=> setProduct({...product , description : e.target.value})}/>
            </div>
            <button>Create</button>
        </form>
    )

}
export default ProductForm