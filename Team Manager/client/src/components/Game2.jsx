import {useState , useEffect} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Button, Table } from "reactstrap";


const Game2 = () => {
    const [allPlayers , setAllPlayers ] = useState([]);
    const [state , setState] = useState('');
    
    useEffect(() => {
        axios.get('http://localhost:8000/players')
            .then( res => {setAllPlayers(res.data.players) ; console.log(res.data.players)})
            .catch(err => console.log(err))
    },[state])

    const handleStatus = (id,status) => {
        axios.patch(`http://localhost:8000/players/${id}` , {status2 : status})
            .then(res => {console.log(res), setState(!state)})
            .catch(err => console.log(err))
    }

    return (
        <>
        <div style={{display : 'flex'}}>
                    <Link to={'/players/list'} >Manage Player | </Link>
                    <Link to={'/status/game1'} style={{fontWeight : 'bold'}}>Manage Player Status</Link>
                </div>
            <div style={{border : '3px solid black', borderBottom :'none' , padding : '40px'}}>   
                <div>
                    <h1>Player Status - Game 2</h1>
                </div>
                <div style={{display : 'flex'}}>
                    <Link to={'/status/game1'}>Game 1 |</Link>
                    <Link to={'/players/game2'} style={{fontWeight :'bold'}}>Game 2 |</Link>
                    <Link to={'/players/game3'}>Game 3 |</Link>
                </div>
                <Table bordered >
                    <thead>
                        <tr>
                            <th>Team name</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        { allPlayers.map( (player , index) => 
                                <tr key={player._id}>
                                    <td>{player.name}</td>
                                    <td><div>
                                        <button className="status" style={player.status2 == 'Playing' 
                                            ? {backgroundColor : 'green'} 
                                            : {backgroundColor : 'white'}}
                                            onClick={() => handleStatus(player._id,'Playing')}>Playing</button>

                                        <button className="status" style={player.status2 == 'Not playing'
                                            ? {backgroundColor : 'red'} 
                                            : {backgroundColor : 'white'}}  
                                            onClick={() => handleStatus(player._id,'Not playing')}>Not playing</button>

                                        <button className="status" style={player.status2 == 'Undecided' 
                                            ? {backgroundColor : 'yellow'} 
                                            : {backgroundColor : 'white'}} 
                                            onClick={() => handleStatus(player._id,'Undecided')}>Undecided</button>
                                        </div>
                                    </td>
                                </tr>
                            )}
                    </tbody>
                </Table>
        </div>
        </>
    )
}


export default Game2