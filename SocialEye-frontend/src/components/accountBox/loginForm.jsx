import React, { useContext, useState} from "react";

import axios from 'axios'

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

function LoginForm(props) {
  const { switchToSignup } = useContext(AccountContext);
  
  const [values, setValues] = useState({
    email: '',
    password: ''
  });

  function handleChange(e) {
    const data={...values}
    data[e.target.id]=e.target.value
    setValues(data);
    console.log(data)  
  }

  function onSubmit(e){
    e.preventDefault();

    const { email, password } = values;
    const token = {email, password};
    // console.log({
    //   "fullName": token.fullName,
    //   "email": token.email,
    //   "password": token.password
    // })
    const uri="http://localhost:8002/api/signin"
    const ops = {
      method: 'FETCH',
      
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

        <Marginer direction="vertical" margin={20} />
        <MutedLink href="#">Forget your password?</MutedLink>
        <Marginer direction="vertical" margin="1.6em" />
        <SubmitButton type="submit">Signin</SubmitButton>
        <Marginer direction="vertical" margin="1em" />

      </FormContainer>
      
      <MutedLink href="#">
        Don't have an accoun?{" "}
        <BoldLink href="#" onClick={switchToSignup}>
          Signup
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}

export {LoginForm}

// import React, { useState, useEffect } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';

// import { userActions } from '../_actions';

// function LoginPage() {
//     const [inputs, setInputs] = useState({
//         username: '',
//         password: ''
//     });
//     const [submitted, setSubmitted] = useState(false);
//     const { username, password } = inputs;
//     const loggingIn = useSelector(state => state.authentication.loggingIn);
//     const dispatch = useDispatch();
//     const location = useLocation();

//     // reset login status
//     useEffect(() => { 
//         dispatch(userActions.logout()); 
//     }, []);

//     function handleChange(e) {
//         const { name, value } = e.target;
//         setInputs(inputs => ({ ...inputs, [name]: value }));
//     }

//     function handleSubmit(e) {
//         e.preventDefault();

//         setSubmitted(true);
//         if (username && password) {
//             // get return url from location state or default to home page
//             const { from } = location.state || { from: { pathname: "/" } };
//             dispatch(userActions.login(username, password, from));
//         }
//     }

//     return (
//         <div className="col-lg-8 offset-lg-2">
//             <h2>Login</h2>
//             <form name="form" onSubmit={handleSubmit}>
//                 <div className="form-group">
//                     <label>Username</label>
//                     <input type="text" name="username" value={username} onChange={handleChange} className={'form-control' + (submitted && !username ? ' is-invalid' : '')} />
//                     {submitted && !username &&
//                         <div className="invalid-feedback">Username is required</div>
//                     }
//                 </div>
//                 <div className="form-group">
//                     <label>Password</label>
//                     <input type="password" name="password" value={password} onChange={handleChange} className={'form-control' + (submitted && !password ? ' is-invalid' : '')} />
//                     {submitted && !password &&
//                         <div className="invalid-feedback">Password is required</div>
//                     }
//                 </div>
//                 <div className="form-group">
//                     <button className="btn btn-primary">
//                         {loggingIn && <span className="spinner-border spinner-border-sm mr-1"></span>}
//                         Login
//                     </button>
//                     <Link to="/register" className="btn btn-link">Register</Link>
//                 </div>
//             </form>
//         </div>
//     );
// }

// export { LoginPage };