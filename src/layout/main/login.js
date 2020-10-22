
import '../../styles/login.css';
import user from '../../images/user.png'
import './Status'


import React, {useContext} from 'react';
import {firebaseAuth} from '../../provider/AuthProvider'


const Signin = () => {


    const {handleSignin, inputs, setInputs, errors} = useContext(firebaseAuth)
    
    const handleSubmit = (e) => {
      e.preventDefault()
      console.log('handleSubmit')
      handleSignin()
      
    }
    const handleChange = e => {
      const {name, value} = e.target
      console.log(inputs)
      setInputs(prev => ({...prev, [name]: value}))
    }
  
    return (
      <form onSubmit={handleSubmit}>

        
        
        
       


        <div className="auth-wrapper-log">
                    <div className="auth-inner-log">
                        <div class="text-center">
                            <img src={user} width="70px" /> 
                        </div>
                        <div className="textlog">
                            <p>LOGIN</p>
                        </div>
                        
                        <div className="form-group1">
                            <label>Email *</label>
                        </div>
                        
                        <input onChange={handleChange} name="email" placeholder='email' value={inputs.email} />
                        

                        <div className="form-group1">
                            <label>Password *</label>
                        </div>
                        
                        <input onChange={handleChange} name="password" placeholder='password' value={inputs.password} />
                        

                        <p className="forgot-password text-right">
                            Forgot <a href="#">password?</a>
                        </p>


                        <button>signin</button>


                            <p className="dont-have-account">
                                Don't have account? <a href="#">Register</a>
                            </p>
                            {errors.length > 0 ? errors.map(error => <p style={{color: 'red'}}>{error}</p> ) : null}
                    </div>
                </div>
      </form>
    );
  };
  
  export default Signin;