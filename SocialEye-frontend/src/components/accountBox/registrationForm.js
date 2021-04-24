import React, { useContext, useState} from "react";
// import register from '../../register.js'
import axios from 'axios'
// import {Component} from 'react';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import TextField from 'material-ui/TextField';
// import PropTypes from 'prop-types';
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";

// class SignupForm extends Component{
    
//   constructor(){
//       super()
//       this.state={
//           fullName:'',
//           email:'',
//           password:''
//       }
//       this.changeFullName=this.changeFullName.bind(this)
//       this.changeEmail=this.changeEmail.bind(this)
//       this.changePassword=this.changePassword.bind(this)
//       this.onSubmit =this.onSubmit.bind(this)
//       this.onSubmit =this.onSubmit.bind(this)
//   }
  
//   changeFullName(event){
//       this.setState({
//           fullName:event.target.value
//       })
//   }

//   changeEmail(event){
//       this.setState({
//           email:event.target.value
//       })
//   }

//   changePassword(event){
//       this.setState({
//           password:event.target.value
//       })
//   }
//   onSubmit(event) {
//       event.preventDefault();
//       const token = {
//           fullName: this.state.fullName,
//           email: this.state.email,
//           password: this.state.password
//       }

//       axios.post('http://localhost:8001/social/register',token)
//           .then(response=> console.log(response.data))

//       window.location='../../home'
//     }
//     loginJump(event) {
//       event.preventDefault();

//       window.location='./loginForm.jsx'
//     }
    
//     render=()=>{
//       // const { switchToSignin } = useContext(AccountContext);
//       return <BoxContainer>
//       <FormContainer onSubmit={this.onSubmit}>
               
//          <Input type="text" 
//                 id="fullName"
//                 value={this.state.fullName}
//                 onChange={this.changeFullName}
//                 placeholder="Full Name" />
//          <Input type="email" 
//                 id="email"
//                 value={this.state.email}
//                 onChange={this.changeEmail}
//                 placeholder="Email" />
//          <Input type="password" 
//                 id="password"
//                 value={this.state.password}
//                 onChange={this.changePassword} 
//                 placeholder="Password" />
//          <Input type="password" 
//                 id="password"
//                 value={this.state.password}
//                 onChange={this.changePassword} 
//                 placeholder="Password" />

//        </FormContainer>
//        <Marginer direction="vertical" margin={10} />
//        <SubmitButton type="submit" onClick={this.onSubmit} >Signup</SubmitButton>
//        <Marginer direction="vertical" margin="1em" />
//        <MutedLink href="#">
//          Already have an account?
//          <BoldLink href="#" onClick={this.loginJump}>
//            Signin
//          </BoldLink>
//        </MutedLink>
//      </BoxContainer>
      
//     }

// }

// export default SignupForm



export function SignupForm(props) {
  const { switchToSignin } = useContext(AccountContext);

    const [values, setValues] = useState({
        fullName: '',
        email: '',
        password: '',
        password_confirmation: ''
    });

    function handleChange(e){
        const data={...values}
        data[e.target.id]=e.target.value
        setValues(data);
        console.log(data)
    };

  function onSubmit(e){
    e.preventDefault();

    const { fullName, email, password, password_confirmation } = values;
    const token = {fullName, email, password, password_confirmation};
    // console.log({
    //   "fullName": token.fullName,
    //   "email": token.email,
    //   "password": token.password
    // })
    const uri="http://localhost:8002/api/signup"
    const ops = {
      method: 'POST',
      
      headers: { "Content-Type" : "application/json",
      "access-control-allow-origin": "*", },
      data: JSON.stringify(token) ,
      url: uri
      };

      axios(ops).then(res=>console.log(res.data)).catch(err=>console.log(err))

        window.location='../../home'
  }
  return (
    <BoxContainer>
      <FormContainer onSubmit={onSubmit}>
        <Input type="text" 
                id="fullName"
                value={values.fullName}
                onChange={(e)=>handleChange(e)}
                placeholder="Full Name" />
        <Input type="email" 
                id="email"
                value={values.email}
                onChange={(e)=>handleChange(e)} 
                placeholder="Email" />
        <Input type="password" 
                id="password"
                value={values.password}
                onChange={(e)=>handleChange(e)} 
                placeholder="Password" />
        <Input type="password" 
                id="password_confirmation"
                value={values.password_confirmation}
                onChange={(e)=>handleChange(e)} 
                placeholder="Confirm Password" />
        {/* <register/> */}
        <Marginer direction="vertical" margin={10} />
            <SubmitButton type="submit" >Signup</SubmitButton>
        <Marginer direction="vertical" margin="1em" />
      </FormContainer>
      
      <MutedLink href="#">
        Already have an account?
        <BoldLink href="#" onClick={switchToSignin}>
          Signin
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}

