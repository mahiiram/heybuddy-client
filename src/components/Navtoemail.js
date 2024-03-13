import React from 'react'
import { Link } from 'react-router-dom'

function Navtoemail() {
  return (
    <div >
      <Link to={'/signup'} style={{textDecoration:"none"}}><span style={{color:"black",fontSize:"20px",fontWeight:"500"}}>Signup with Phone Or Email</span></Link>
    </div>
  )
}

export default Navtoemail
