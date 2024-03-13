import React from 'react';
import Googleicon from '../components/Googleicon.js';
import MyAppleSigninButton from '../components/Appleicon.js';
import Navtoemail from '../components/Navtoemail.js';
import { Link } from 'react-router-dom';
import Register from './Register.js';


function Homepage() {
    return (

            <div className="main-container">
                <img className='BigImage' src='https://s3-alpha-sig.figma.com/img/fc73/ba7a/f1e6944d750f97b53adecbabca7ffd40?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iHj4MqcoD8Pt9gywdK~mGb3QpXAxpNO67y7K7kxl56NE6u2ENZoTesZW6m7teX-p-IeWHRCEYwuyN6jd~vXWAYBa8Y2Rg5iTYo2KAFKdOnrEs8BgdUCuqWb9aHsp4qlu7NirP52vkL9Xe1aiW3IxKwr4RJrGopYHqSLXM4JEPLkzpKKIK8eoQCwo6mNliI7teAMvS6uXIwWdpaHqT1MMmU0b0plwtNbj4a5Ca~tHz6sTq75PbfCOPd0CVkzbNzP4IAVh2Pts1NxsukBmGzH9FBvOFtbS0iqounqAMhBnnJWrZZXpb9LIB5nrH2RNv084HafNDnAffZP7d0pqMNB9kQ__' alt='' />
                <img className='twitter' src='https://s3-alpha-sig.figma.com/img/50a0/05ad/f774baf026abf0bd326821757f2c1eff?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TKbGeu-1XOrQEXM1Qv4wYre1dHzzdSMIk1xZApwyV1l3LQofkvX0JYY4rcIEDtHx27cjnaLKHV~o0w7QjShoWYxUYYhNMEdKCbFBEDJqRVOMOoPLyBVSaVTRnNR4VNFK3DTXvK4D5nM9oWthmnqr65rxGjjgtpUuMkTO0lbukzwYwRjcDLn5lEmL76Z6j0YxYa6azPRML6YCWemj2G1KgVzDiqoHfTe7cc6lhujOYetQQB10tDKXNLu6kcTM2i~X-cc9uMZR8dK3cB~B57wr5Tvymhg4qpz6krG6ElZA9Hsk3YqpOP6QbdtFwhfKLT63OpRNRHODEwNWsIbjn4q8Bg__' alt='logo' />
                <p>Happening now</p>
                <p>Join Twitter today</p>
                <Googleicon/>
                <MyAppleSigninButton />
                <Register />
                <p>By singing up you agree to the <span style={{color:"#1DA1F2"}}>Terms of Service</span> and <span style={{color:"#1DA1F2"}}>Privacy Policy</span>, including <span style={{color:"#1DA1F2"}}>Cookie Use</span>.</p>
                <p>Already have an account? <span style={{color:"#1DA1F2"}}><Link to={'/login'} style={{textDecoration:"none"}}>Log in</Link></span></p>
                <div>
                   <Link style={{textDecoration:"none"}}><span style={{color:"black",fontFamily:"Roboto"}}>About</span></Link> 
                   <Link style={{textDecoration:"none"}}><span style={{color:"black",fontFamily:"Roboto"}}>Help Center</span></Link>
                   <Link style={{textDecoration:"none"}}><span style={{color:"black",fontFamily:"Roboto"}}>Terms of service</span></Link>
                   <Link style={{textDecoration:"none"}}><span style={{color:"black",fontFamily:"Roboto"}}>Privacy Policy</span></Link>
                   <Link style={{textDecoration:"none"}}><span style={{color:"black",fontFamily:"Roboto"}}>Cookie Policy</span></Link>
                   <Link style={{textDecoration:"none"}}><span style={{color:"black",fontFamily:"Roboto"}}>Ads Info</span></Link>
                   <Link style={{textDecoration:"none"}}><span style={{color:"black",fontFamily:"Roboto"}}>Blog</span></Link>
                   <Link style={{textDecoration:"none"}}><span style={{color:"black",fontFamily:"Roboto"}}>Carres</span></Link>
                   <Link style={{textDecoration:"none"}}><span style={{color:"black",fontFamily:"Roboto"}}>brand Resources</span></Link>
                   <Link style={{textDecoration:"none"}}><span style={{color:"black",fontFamily:"Roboto"}}>Advertising</span></Link>
                   <Link style={{textDecoration:"none"}}><span style={{color:"black",fontFamily:"Roboto"}}>Marketing</span></Link>
                   <Link style={{textDecoration:"none"}}><span style={{color:"black",fontFamily:"Roboto"}}>Twitter for business</span></Link>
                   <Link style={{textDecoration:"none"}}><span style={{color:"black",fontFamily:"Roboto"}}>Develepors</span></Link>
                   <Link style={{textDecoration:"none"}}><span style={{color:"black",fontFamily:"Roboto"}}>directories</span></Link>
                   <Link style={{textDecoration:"none"}}><span style={{color:"black",fontFamily:"Roboto"}}>Settings</span></Link>
                   <Link style={{textDecoration:"none"}}><span style={{color:"black",fontFamily:"Roboto"}}>© 2021 Twitter, Inc.</span></Link>
                </div>
                 
            </div>
      
    )
}

export default Homepage