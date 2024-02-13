import React from "react";
import { useNavigate } from "react-router-dom";

const AuthorForm = ({addAuthor, author , setAuthor,errors}) => {
    
    const navigate = useNavigate();
    
    return (
        <>
        <form onSubmit={addAuthor } style={{padding : '20px' , border : '1px solid black' , width : 'fit-content' , margin : '0px auto' , textAlign : 'start'}}>
            <label style={{fontSize : '1.3em'}}>Name :</label><br/>
            <input type="text" value={author.name} onChange={(e) => setAuthor({...author,name : e.target.value})}></input><br/>
            {errors ? <p>{errors}</p> : ''}
            <button onClick={() => navigate('/')}>Cancel</button>
            <button type="submit">Submit</button>
        </form>
        </>
    )
}

export default AuthorForm