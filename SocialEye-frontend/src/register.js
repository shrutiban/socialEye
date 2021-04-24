import React from "react";
import "./register.css";
import {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
// import PropTypes from 'prop-types';
// import { useState } from "react";
import axios from 'axios' 
// import { response } from "express";

class register extends Component{
    
    constructor(){
        super()
        this.state={
            fullName:'',
            email:'',
            password:''
        }
        this.changeFullName=this.changeFullName.bind(this)
        this.changeEmail=this.changeEmail.bind(this)
        this.changePassword=this.changePassword.bind(this)
        this.onSubmit =this.onSubmit.bind(this)
        this.onSubmit =this.onSubmit.bind(this)
    }
    
    changeFullName(event){
        this.setState({
            fullName:event.target.value
        })
    }

    changeEmail(event){
        this.setState({
            email:event.target.value
        })
    }

    changePassword(event){
        this.setState({
            password:event.target.value
        })
    }
    onSubmit(event) {
        event.preventDefault();
        const token = {
            fullName: this.state.fullName,
            email: this.state.email,
            password: this.state.password
        }

        axios.post('http://localhost:8001/social/register',token)
            .then(response=> console.log(response.data))

        window.location='./home'
      }
      
      render(){
        return <div className="register">
        <MuiThemeProvider>
        
              <form onSubmit={this.onSubmit}>
              <h2>Register</h2>
                  <label>                 
                      <TextField type="text" hintText="Enter your Username"
                 floatingLabelText="Enter your Username" onChange={this.changeFullName}
                 value={this.state.fullName}/>
                  </label>
                  <br/>
                  <label>                 
                      <TextField type="text" hintText="Enter your Email ID"
                 floatingLabelText="Enter your Email ID" onChange={this.changeEmail}
                 value={this.state.email}/>
                  </label>
  
                  <br/>
                  <label>
                      <TextField type="password" hintText="Enter your Password"
                 floatingLabelText="Password" onChange={this.changePassword}
                 value={this.state.password}/>
                  </label>
                  <br/>
                  <div>
                  <button type="submit" onClick={this.onSubmit} value={this.state.onSubmit}>Submit</button>
                  </div>
                  <br/>
                  <p>Already have an account? Click on Login</p>
                  <br/>
                  <div>
                      <button type="Login" >Login</button>
                  </div>
              </form>
              
              </MuiThemeProvider>
          </div>

      }

}
// function Register({setToken}){

//     const [fullName, setFullName] = useState();
//     const [email, setEmail] = useState();
//     const [password, setPassword] = useState();
//     const [handleSubmit, setonSubmit]=useState();
//     handleSubmit=(e)=> {
//         e.preventDefault();
//         const token = {
//             fullName: this.state.fullName,
//             email: this.state.email,
//             password: this.state.password
//         }

//         axios.post('http://localhost:8001',token)
//             .then(response=> console.log(response.data))

//         window.location='/home'
//       }

    
// }
// Register.propTypes={
//     setToken: PropTypes.func.isRequired
// }

export default register;