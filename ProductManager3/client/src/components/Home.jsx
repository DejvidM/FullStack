import { BrowserRouter, Routes , Route } from "react-router-dom"
import React, { useEffect, useState } from "react"
import ProductForm from "./ProductForm"
import AllProductDisplay from "./AllProductDisplay"
import axios from "axios"
const Home = () => {
    const [allProducts , setAllProducts] = useState([]);    

            useEffect(() => {
                axios.get('http://localhost:8000/api')
                    .then(res => {console.log(res) ; setAllProducts(res.data) ;})
                    .catch(err => console.log(err));
                    },[])

            const [product , setProduct] = useState({
                title : '' ,
                price : '' ,
                description : ''
            });
        
            const handleSubmit = (e) => {
                e.preventDefault();
                product.title.length < 2 || product.price < 1 || product.description.length < 10
                ? setProduct({title : '' , price : '' , description : ''}) 
                :   axios.post('http://localhost:8000/api', product )
                        .then( res =>{setAllProducts([...allProducts , product]);
                                    setProduct({title : '' , price : '' , description : ''}) })
                        .catch( err => console.log(err));
                    
                }

            const handleDelete = (parameter) =>{
                axios.delete(`http://localhost:8000/api/${parameter}`)
                    .then(res => console.log(res))
                    .catch(err => console.log(err))
                setAllProducts(allProducts.filter( (item) => item.title != parameter))
            }

    return (
        <>
            <ProductForm product={product} setProduct={setProduct} formSubmiter={handleSubmit}></ProductForm>
            <AllProductDisplay allProducts={allProducts} deleteButton={handleDelete}></AllProductDisplay>
        </>
    )
}

export default Home