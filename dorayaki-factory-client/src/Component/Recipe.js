import Axios from "axios";
import React, {Component, useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";

const Recipe = () =>  { 
        const [recipe, setRecipe] = useState([]);
        const token = localStorage.getItem('token');
        const getRecipe = () => {
          Axios.get("http://localhost:3000/resep", {
            headers: {
              "Authorization" : token
            }
          }).then((res) => {
            setRecipe(res.data);
          }).catch(error=>console.log(error));
      };
      const userObj = JSON.parse(localStorage.getItem('token') && '{}');
      //alert(localStorage.getItem('token'));
      const isLoggedIn = userObj ? true : false;      
        useEffect(() => {
          getRecipe();
        }, [recipe]);
        if(isLoggedIn) {
          return(
            <div>
            <h3 align="center">List Resep</h3>
            <table className="table table-striped" style={{ marginTop: 20 }}>
            <thead>
            <tr>
            <th> nama </th>
            <th> telur </th>
            <th> tepungTerigu </th>
            <th> gulaPasir </th>
            <th> madu </th>
            <th> garam </th>
            <th> susuCair </th>
            </tr>
            </thead>
            {recipe.map(item => (
              <tbody>
                <tr>
                <td> {item.name} </td>
                <td> {item.telur} </td>
                <td> {item.tepungTerigu} </td>
                <td> {item.gulaPasir} </td>
                <td> {item.madu} </td>
                <td> {item.garam} </td>
                <td> {item.susuCair} </td>
                </tr>
              </tbody>
            ))}
        </table>
        </div>

          )
      }
      else {
        return(<div></div>)
      }
  }

  export default Recipe ;
