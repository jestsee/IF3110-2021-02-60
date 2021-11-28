import Axios from 'axios';
import { useEffect, useState } from "react";
import {Link} from 'react-router-dom';

function View(props){
    const [bahanbakus, setBahanbaku] = useState([]);
    const token = localStorage.getItem('token');
    const userObj = JSON.parse(localStorage.getItem('token') && '{}');
    //alert(localStorage.getItem('token'));
    const isLoggedIn = userObj ? true : false;
    useEffect(()=>{
        Axios.get('http://localhost:3000/api/view', 
        {
            headers: {
            "Authorization" : token
            }
        }   
        ).then((response) => {
            //console.log(response); 
            setBahanbaku(response.data);
        })
    })
    if(isLoggedIn) {
    return(
        <div>
            <h3 align="center">List Bahan Baku</h3>
            <table className="table table-striped" style={{ marginTop: 20 }}>
                <thead>
                    <tr>
                        <th>Nama Bahan Baku</th>
                        <th>Banyak</th>
                        <th colSpan="1">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {bahanbakus.map((val) => {
                        return (<tr> 
                            <td> 
                                {val.namabahanbaku} 
                            </td> 
                            <td> 
                                {val.amount} 
                            </td> 
                            <td> 
                            <Link to={{pathname:"/edit/" + val.idbahanbaku, state: {id: val.idbahanbaku}}} className="btn btn-primary">Edit</Link>
                            </td>
                        </tr>)
                    })}
                </tbody>
            </table>
        </div>
    );
    }
    else {
        return(<div></div>)
    }
}

export default View;