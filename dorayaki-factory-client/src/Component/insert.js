import React, { useState, useEffect } from "react"
import Axios from 'axios';

function Insert(){

    const [namabahanbaku, setNamaBahanBaku] = useState('');
    const [banyakbahanbaku, setAmount] = useState('');
    const userObj = JSON.parse(localStorage.getItem('token') && '{}');
    const isLoggedIn = userObj ? 1 : 0;

    //querynya : "INSERT INTO bahanbaku (namaBahanBaku, amount) VALUES (?,?);"

    const submitForm = () => {
        Axios.post('http://localhost:3000/api/insert', {
            namabahanbaku: namabahanbaku,
            banyakbahanbaku : banyakbahanbaku, 
        }).then(() => {
            alert("successful insert");
        })
    };
    if(isLoggedIn) {
    return(
        <div style={{marginTop: 10}}>
            <h3>Add new Ingredient</h3><br/>
            <form>
                <div className="form-group">
                    <label>Ingredient Name :</label>
                    <input type="text" className="form-control" name="namabahanbaku" onChange={(e) => {
                        setNamaBahanBaku(e.target.value);
                    }}></input>
                </div>
                <div className="form-group">
                    <label>Amount:</label>
                    <input type="number" className="form-control" name="banyakbahanbaku" onChange={(e) => {
                        setAmount(e.target.value);
                    }}></input>
                </div>
                <br/>
                <div className="form-group">
                    <input type="submit" value="Register ingredient" className="btn btn-primary" onClick={submitForm}></input>
                </div>
            </form>
        </div>
    )
    }
    else {
        return<div></div>
    }
}

export default Insert;