import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className='Login-container'>  
    <div className='card-container'>
    <img className='image' src='https://s3-alpha-sig.figma.com/img/50a0/05ad/f774baf026abf0bd326821757f2c1eff?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TKbGeu-1XOrQEXM1Qv4wYre1dHzzdSMIk1xZApwyV1l3LQofkvX0JYY4rcIEDtHx27cjnaLKHV~o0w7QjShoWYxUYYhNMEdKCbFBEDJqRVOMOoPLyBVSaVTRnNR4VNFK3DTXvK4D5nM9oWthmnqr65rxGjjgtpUuMkTO0lbukzwYwRjcDLn5lEmL76Z6j0YxYa6azPRML6YCWemj2G1KgVzDiqoHfTe7cc6lhujOYetQQB10tDKXNLu6kcTM2i~X-cc9uMZR8dK3cB~B57wr5Tvymhg4qpz6krG6ElZA9Hsk3YqpOP6QbdtFwhfKLT63OpRNRHODEwNWsIbjn4q8Bg__' alt='twitter-logo'/>
    <p className='Login'>Log in to Twitter</p>
    <input className="emailInput" type='text' name='email' placeholder='Phone number,email address' />
    <input className="PasswordInput"   type='password' name='email' placeholder='Password' />
    <button className='Button' type='submit'>Login</button>
    <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginTop:'25px'}}>
        <Link to={'/forgetpassword'} style={{textDecoration:"none"}}><span style={{color:'#1DA1F2'}}>Forget Password?</span></Link>
        <Link to={'/signup'} style={{textDecoration:"none"}}><span style={{color:'#1DA1F2'}}>Signup to the twitter</span></Link>
    </div>
    </div>
     </div>

  )
}

export default Login
