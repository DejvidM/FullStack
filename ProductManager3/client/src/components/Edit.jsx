import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";
const Edit = () => {
    const navigate = useNavigate();
    const {title} = useParams();
    const [ updatedP , setUpdatedP] = useState({
        title : '',
        price : '',
        description : ''
    });

    const handleForm = (e) => {
        e.preventDefault();
        axios.patch(`http://localhost:8000/edit/${title}` , updatedP)
            .then(res => console.log(res))
            .catch(err => console.log(err))
        setUpdatedP({title : '' , price : '' , description : ''});
        navigate('/');
    }
    const removeProduct = () => {
        axios.delete(`http://localhost:8000/api/${title}`)
            .then(res => console.log(res))
            .catch(err => console.log(err))
        navigate('/');
    }

    return(
        <>
        <form onSubmit={handleForm}  style={{margin : '0px auto' , width : 'fit-content' , display : 'flex' , flexDirection : 'column',
                                                alignItems : 'center' , fontSize : '1.2em' }}>
            <label>Set new Title for {title}</label>
            <input type="text" value={updatedP.title} onChange={(e) => setUpdatedP({...updatedP , title : e.target.value})}/>
            <label>Set new Price {title}</label>
            <input type="number" value={updatedP.price} onChange={(e) => setUpdatedP({...updatedP , price : e.target.value})}/>
            <label>Set new Description {title}</label>
            <input type="text" value={updatedP.description} onChange={(e) => setUpdatedP({...updatedP , description : e.target.value})}/>
            <input type="submit" value={"Submit this"}/>
        </form>
        <div style={{margin : '0px auto' , width : 'fit-content', marginTop : '10px'}}>
        <button onClick={removeProduct}>DELETE PRODUCT</button>
        <Link to={'/'}  style={{marginLeft : '20px'}}>Back</Link>
        </div>
        </>
    )
}

export default Edit