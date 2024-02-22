import React, { useEffect, useState } from "react";
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Button, Table } from "reactstrap";


const PlayerList = () => {
    const [allPlayers , setAllPlayers ] = useState([]);
    const [popup , setPopup] = useState('');
    const [popupname , setPopUpName] = useState('');
    const [popupid , setPopUpId] = useState('');

    useEffect(() => {
        axios.get('http://localhost:8000/players')
            .then( res => setAllPlayers(res.data.players))
            .catch(err => console.log(err))
    })

    const handleButton = (id,name) => {     
        setPopup(true);
        setPopUpName(name);
        setPopUpId(id);
    }

    const deletePlayer = () => {
        axios.delete(`http://localhost:8000/players/${popupid}`)
            .then( res => setPopup(''))
            .catch(err => console.log(err))
    }

    return(
        <>
            {allPlayers 
            ?
            <div>
                <div style={{display : 'flex'}}>
                    <Link to={'/players/list'} style={{fontWeight : 'bold'}}>Manage Player | </Link>
                    <Link to={'/status/game1'}>Manage Player Status</Link>
                </div>
                <div className="container">
                    <div style={{display : 'flex'}}>
                        <Link to={'/players/list'} style={{ fontWeight : 'bold'}} >List | </Link>
                        <Link to={'/players/addplayer'}>Add Player</Link>
                    </div>
                <Table bordered striped> 
                    <thead>
                        <tr>
                            <th>Team Name</th>
                            <th>Preferred Position</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    {allPlayers.length > 0
                    ?
                    <tbody>
                        { allPlayers.map( (player) => 
                            <tr key={player._id}>
                                <td scope="row">{player.name}</td>
                                <td>{player.position ? player.position : 'everywhere'}</td>
                                <td><Button color="danger" onClick={()=> handleButton(player._id,player.name)}>Delete</Button></td>
                            </tr>
                        )}
                    </tbody>
                    : ''
                }
                </Table>
                {popup 
                ? <div className="popup">
                    <h1>Do you want to delete {popupname}</h1>
                    <Button color="primary" size="lg" onClick={deletePlayer}>Yes</Button>
                    <Button color="primary" size="lg" onClick={() => { setPopUpId('') ; setPopUpName('') ; setPopup('')}}>No</Button>
                </div>
                : ''}
                </div>
            </div>
            : ''
            }
        </>
    )
}

export default PlayerList