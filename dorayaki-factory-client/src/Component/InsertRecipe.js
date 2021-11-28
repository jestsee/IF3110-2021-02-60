import React, {Component, useState} from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";

const InsertRecipe = () =>  { 
        let history = useNavigate();
        const [showWarning, setShowWarning] = useState(false);
  //  name VARCHAR(255) PRIMARY KEY, telur INT, tepungTerigu INT, gulaPasir INT, madu INT, garam INT, susuCair INT";
        const [name, setName] = useState("");
        const [telur, setTelur] = useState();
        const [tepungTerigu, setTepungTerigu] = useState();
        const [gulaPasir, setGulaPasir] = useState();
        const [madu, setMadu] = useState();
        const [garam, setGaram] = useState();
        const [susuCair, setSusuCair] = useState();
        const userObj = JSON.parse(localStorage.getItem('token') && '{}');
        const isLoggedIn = userObj ? 1 : 0;
        const insertRecipe = () => {
            Axios.post("http://localhost:3000/insertRecipe", {
              nama: name,
              telur: telur,
              tepungTerigu: tepungTerigu,
              gulaPasir: gulaPasir,
              madu: madu,
              garam: garam,
              susuCair: susuCair,
          } 
        ).then((res) => {
          alert("Recipe successfully added");
          window.location.reload();
        }).catch(error => {
          console.log('Error: ', error)
        })
      };
      
      //  name VARCHAR(255) PRIMARY KEY, telur INT, tepungTerigu INT, gulaPasir INT, madu INT, garam INT, susuCair INT";
        const handleName = (e) => {
          setName(e.target.value);
        };
      
        const handleTelur = (e) => {
          setTelur(e.target.value);
        };
        
        const handleTepungTerigu = (e) => {
          setTepungTerigu(e.target.value);
        };

        const handleGulaPasir = (e) => {
          setGulaPasir(e.target.value);
        };

        const handleMadu = (e) => {
          setMadu(e.target.value);
        };

        const handleGaram = (e) => {
          setGaram(e.target.value);
        };

        const handleSusuCair = (e) => {
          setSusuCair(e.target.value);
        };
        if(isLoggedIn==1) {
        return (
            <div>
                <div>
                        <h2>Insert Recipe</h2>
                            <form>
                                <div>
                                    <label>Nama</label>
                                     <input className="form-control" onChange={(event) => {handleName(event);}} placeholder="Nama" required/>
                                </div>
                                <div>
                                    <label>Telur</label>
                                    <input type="number" className="form-control" onChange={(event) => {handleTelur(event);}}placeholder="Telur" />
                                </div>
                                <div>
                                    <label>TepungTerigu</label>
                                    <input type="number" className="form-control" onChange={(event) => {handleTepungTerigu(event);}}placeholder="TepungTerigu" />
                                </div>
                                <div>
                                    <label>GulaPasir</label>
                                    <input type="number" className="form-control" onChange={(event) => {handleGulaPasir(event);}}placeholder="GulaPasir" />
                                </div>
                                <div>
                                    <label>Madu</label>
                                    <input type="number" className="form-control" onChange={(event) => {handleMadu(event);}}placeholder="Madu" />
                                </div>
                                <div>
                                    <label>Garam</label>
                                    <input type="number" className="form-control" onChange={(event) => {handleGaram(event);}}placeholder="Garam" />
                                </div>
                                <div>
                                    <label>SusuCair</label>
                                    <input type="number" className="form-control" onChange={(event) => {handleSusuCair(event);}}placeholder="SusuCair" />
                                </div>
                                    <input type="submit" value="Submit" className="btn btn-primary btn-lg btn-block" onClick={(insertRecipe)}></input>
                              </form>
                </div>
            </div> 
         );
        }
        else {
        }
        return <div></div>
      }

    export default InsertRecipe ;