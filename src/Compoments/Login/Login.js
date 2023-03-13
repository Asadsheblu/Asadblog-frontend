import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate=useNavigate()
    const login=(e)=>{
       
        const email=e.target.email.value;
        const password=e.target.password.value
       

        if(email=="shebluasad@gmail.com" && password=="asad56"){
                navigate('/sidebar')
        }
       
    }
    return (
        <div className='container'>
           <form onSubmit={login} className='mx-auto'>
  <div className="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input  name="email" type="email" className="form-control w-75" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input name='password' type="password" className="form-control w-75" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  <div className="form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
  <h6 id='error'></h6>
</form> 
        </div>
    );
};

export default Login;