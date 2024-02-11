import React, { useState } from "react";

const ProductForm = ({product,setProduct,formSubmiter}) => {
    
    return(
        <form onSubmit={formSubmiter} style={{margin : '0px auto' , width : 'fit-content' , display : 'flex' , flexDirection : 'column',
                                                alignItems : 'center'}}>
            <h1>Product Menager</h1>
            <div>
                <label> Title : </label>
                <input type="text" value={product.title} onChange={(e)=> { setProduct({ ...product ,title : e.target.value   }) }}/>
                {product.title.length < 2 && product.title.length > 0
                ? <p style={{color : 'gray' , fontSize : '0.8em'}}>Product title must be longer than 1 character</p>
                : ''
                }
            </div>
            <div>
                <label> Price: </label>
                <input type="number" value={product.price} onChange={(e)=> setProduct({...product , price : e.target.value})} />
                {product.price < 1 && product.price != ''
                ? <p style={{color : 'gray' , fontSize : '0.8em'}}>Product price must be at least 1 euro</p>
                : ''
                }   
            </div>
            <div>
                <label> Description : </label>
                <input type="text" value={product.description} onChange={(e)=> setProduct({...product , description : e.target.value})}/>
                {product.description.length < 10 && product.description.length > 0
                ? <p style={{color : 'gray' , fontSize : '0.8em'}}>Product description must be longer than 10 character</p>
                : ''
                }
            </div>
            <button>Create</button>
        </form>
    )

}
export default ProductForm