import axios from 'axios';
import Axios from 'axios';
import { useEffect, useState } from "react";
import {useParams} from 'react-router-dom';

export default function Edit(props){
//masih aneh chrome ngambek
    const [namabahanbaku, setNamaBahanBaku] = useState('');
    const [banyakbahanbaku, setAmount] = useState('');
    const [bahanbaku1, setBahanbaku1] = useState([]);
    const [bahanbaku, setBahanbaku] = useState([]);
    const [idbahan, setIdBahan] = useState('');
    const {id} = useParams();
    const token = localStorage.getItem('token');
    const userObj = JSON.parse(localStorage.getItem('token') && '{}');
    //alert(localStorage.getItem('token'));
    const isLoggedIn = userObj ? true : false;
    useEffect(()=>{
        Axios.get('http://localhost:3000/api/view', {
            headers: {
            "Authorization" : token
            }   
        }).then((response) => {
            //console.log(response); 
            //const {id} = useParams();
            //console.log(id);
            setBahanbaku(response.data);
        });
    })



    //let {id} = useParams(); //ini udah ketemu id
    //const ids = id;
    //mau ambil bahan baku tertentu, tapi how?

    //pilihbahanbaku(() => {
      //  let {id} = useParams(); //ini udah ketemu id
       // const ids = id;
    //useEffect(()=>{
     //  {bahanbaku.map((val) => {
     //   if(val.idbahanbaku === id){
     //       setBahanbaku1(val);
     //   }
     //   })}
    //});
    //});

    for (let i = 0; i<bahanbaku.length; i++){
        if(bahanbaku[i].idbahanbaku == id){
            bahanbaku1[0] = bahanbaku[i];
            //console.log(bahanbaku1[0]);
            //console.log(bahanbaku[i]);
        }
    }

    const submitForm = () => {
        Axios.put('http://localhost:3000/api/edit', {
            idbahan : idbahan,
            namabahanbaku: namabahanbaku,
            banyakbahanbaku : banyakbahanbaku,   
        }).then(() => {
            alert("successful edit");
        })
    };

//{bahanbaku.map((val) => { return(<h3>Add new Ingredient {val.idbahanbaku}</h3>)})}
    if(isLoggedIn) {
    return(
        <div style={{marginTop: 10}}>
            {bahanbaku1.map((val) => { return(
            <h3>Edit Bahan Baku "Nama : {val.namabahanbaku} | Jumlah : {val.amount}" </h3>)})}
                <br/>
                <form>
                    <div className="form-group">
                        <label>Ingredient Name :</label>
                        {bahanbaku1.map((val) => { return(
                        <input type="text" className="form-control" name="namabahanbaku" onChange={(e) => {
                        setNamaBahanBaku(e.target.value); setIdBahan(val.idbahanbaku);}}></input>)})}
                    </div>
                    <div className="form-group">
                        <label>Amount:</label>
                        {bahanbaku1.map((val) => { return(
                        <input type="number" className="form-control" name="banyakbahanbaku" onChange={(e) => {
                        setAmount(e.target.value);
                    }}></input>)})}
                    </div>
                    <br/>
                    <div className="form-group">
                        <input type="submit" value="Edit ingredient" className="btn btn-primary" onClick={submitForm}></input>
                    </div>
                </form>
        </div>
    )
    }
    else {
        return (<div></div>)
    }
}