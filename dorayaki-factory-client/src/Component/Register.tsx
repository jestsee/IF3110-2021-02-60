import React, {Component, useState} from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";

const Register = () =>  { 
        let history = useNavigate();
        const [showWarning, setShowWarning] = useState(false);
        const [username, setUsername] = useState("");
        const [password, setPassword] = useState("");
        const [email, setEmail] = useState("");
        const register = () => {
            Axios.post("http://localhost:3000/register", {
              username: username,
              password: password,
              email: email,
            }
        ).then((res) => {
          alert("User successfully added");
          history("/");
          window.location.reload();
        }).catch(error => {
          console.log('Error: ', error)
        })
      };
      
        const handleName = (e: any) => {
          setUsername(e.target.value);
        };

        const handleEmail = (e: any) => {
          setEmail(e.target.value);
        };
      
        const handlePassword = (e: any) => {
          setPassword(e.target.value);
        };
      
        const handleRegister = async () => {
          history("/");
        };
        return (
            <div>
                <div>
                        <h2>Register Sistem</h2>
                            <form>
                                <div>
                                    <label>Email</label>
                                    <input className="form-control" onChange={(event) => {handleName(event);}} placeholder="Masukan email anda" required/>
                                </div>
                                <div>
                                    <label>Username</label>
                                     <input type="username" className="form-control" onChange={(event) => {handleEmail(event);}} placeholder="Masukan username anda" required/>
                                </div>
                                <div>
                                    <label>Password</label>
                                    <input type="password" className="form-control" onChange={(event) => {handlePassword(event);
          }}
placeholder="Password" />
                                </div>
                                <div>
                                    </div>
                                    <input type="submit" value="Submit" className="btn btn-primary btn-lg btn-block" onClick={(register)}></input>                   
                            </form>
                </div>
            </div> 
         );
        }

    export default Register ;