import React, {Component, useState} from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import { Result } from "express-validator";
import Register from "./Register";

const Login = () =>  { 
        let history = useNavigate();
        const [showWarning, setShowWarning] = useState(false);
        const [username, setUsername] = useState("");
        const [password, setPassword] = useState("");
        const login = () => {
            Axios.post("http://localhost:3000/login", {
              username: username,
              password: password,
            }
        ).then((res) => {
          alert("Logged in");
          localStorage.setItem('token', res.data.token);
          window.location.reload();
        }).catch(error => {
          console.log('Error: ', error)
        })
      };
      
        const handleName = (e: any) => {
          setUsername(e.target.value);
        };
      
        const handlePassword = (e: any) => {
          setPassword(e.target.value);
        };

        const handleRegister = () => {
          history("/register");
          window.location.reload();
        }
      
        return (
            <div>
                <div>
                        <div onClick={(handleRegister)}>No account yet? Register</div>  
                        <h2>Login Sistem</h2>
                            <form>
                                <div>
                                    <label>Username</label>
                                    <input className="form-control" onChange={(event) => {handleName(event);}} placeholder="Masukan username anda" required/>
                                </div>
                                <div>
                                    <label>Password</label>
                                    <input type="password" className="form-control" onChange={(event) => {handlePassword(event);}}placeholder="Password" required/>
                                </div>
                                <div>
                                    <input type="submit" value="Submit" className="btn btn-primary btn-lg btn-block" onClick={(login)}></input>
                                </div>
                            </form>
                </div>
            </div> 
         );
        }

    export default Login ;