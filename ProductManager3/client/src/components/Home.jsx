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

    return (
        <>
            <ProductForm allProducts={allProducts} setAllProducts={setAllProducts}></ProductForm>
            <AllProductDisplay allProducts={allProducts} setAllProducts={setAllProducts}></AllProductDisplay>
        </>
    )
}

export default Home