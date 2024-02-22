import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate} from 'react-router-dom'
const AddPlayer = () => {

    const navigate = useNavigate();
    const [ name , setName ] = useState('');
    const [ position , setPosition] = useState('');
    const [errors ,setErrors] = useState('');

    const formHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/players' , { name , position})
            .then( res =>{ setName('');
                            setPosition('');
                            navigate('/');
                    })
            .catch( err => setErrors(err.response.data.errors))
        
    }

    return (
        <>
        <div>
            <div style={{display : 'flex'}}>
                <Link to={'/players/list'}>Manage Player | </Link>
                <Link to={'/status/game1'}>Manage Player Status</Link>
            </div>
            <div className="container">
                <div style={{display : 'flex'}}>
                    <Link to={'/players/list'}  >List | </Link>
                    <Link to={'/players/addplayer'} style={{ fontWeight : 'bold'}}>Add Player</Link>
                </div>
                <form onSubmit={(e) => { formHandler(e)}}>
                    <h1>Add Player</h1>
                    <label>Player name : </label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
                    {errors ? <p style={{color : 'red'}}>{errors.name.message}</p> : ''}
                    <label>Preferred postion : </label>
                    <input type="text" value={position} onChange={(e) => setPosition(e.target.value)}/>
                    <button type="submit">Add</button>
                </form>
            </div>
        </div>
    </>
    )
}

export default AddPlayer;