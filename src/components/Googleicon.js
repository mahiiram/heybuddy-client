import React from 'react';
import { useGoogleLogin } from '@react-oauth/google';


function Googleicon() {
    const login = useGoogleLogin({
        onSuccess: tokenResponse => console.log(tokenResponse),
      });
  return (
    <div>
      <img style={{height:"20px", width:"20px"}} src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/2048px-Google_%22G%22_logo.svg.png' />
      <button style={{backgroundColor:"transparent",border:"none"}} onClick={() => login()}>Sign in with Google</button>
    </div>
  )
}


export default Googleicon
