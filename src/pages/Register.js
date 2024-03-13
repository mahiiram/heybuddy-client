import React,{useState} from 'react'

function Register() {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [dobMonth, setDobMonth] = useState('');
  const [dobDay, setDobDay] = useState('');
  const [dobYear, setDobYear] = useState('');

   const handlesubmit =(e)=>{
    e.preventDefault();

   }
  return (
    <div>
      <button style={{ backgroundColor: 'transparent', border: 'none' }} type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Signup with Phone Or Email
      </button>


      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <img style={{ height: '33px', width: '40px' }} src='https://s3-alpha-sig.figma.com/img/50a0/05ad/f774baf026abf0bd326821757f2c1eff?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TKbGeu-1XOrQEXM1Qv4wYre1dHzzdSMIk1xZApwyV1l3LQofkvX0JYY4rcIEDtHx27cjnaLKHV~o0w7QjShoWYxUYYhNMEdKCbFBEDJqRVOMOoPLyBVSaVTRnNR4VNFK3DTXvK4D5nM9oWthmnqr65rxGjjgtpUuMkTO0lbukzwYwRjcDLn5lEmL76Z6j0YxYa6azPRML6YCWemj2G1KgVzDiqoHfTe7cc6lhujOYetQQB10tDKXNLu6kcTM2i~X-cc9uMZR8dK3cB~B57wr5Tvymhg4qpz6krG6ElZA9Hsk3YqpOP6QbdtFwhfKLT63OpRNRHODEwNWsIbjn4q8Bg__' alt='logo-twitter' />

              </div>
              <p style={{
                width: "300px", height: "40px", fontfamily: "Segoe UI",
                fontSize: "30px", fontWeight: "700", lineHeight: "40px", letterSpacing: "0em",
                textAlign: "left"
              }}>Create an account</p>
              <form onSubmit={handlesubmit}>

              <input type="text" class="form-control mt-4" placeholder="Name" value={name}
        onChange={(e) => setName(e.target.value)} />
              <input type="text" class="form-control mt-4 mb-4" placeholder="Phone Number" value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}/>
              <p style={{
                width: "78px",
                height: "24px", fontFamily: "Segoe UI",
                fontSize: "18px",
                fontWeight: "400",
                lineHeight: "24px",
                letterSpacing: "0em",
                textAlign: "left",
                color: '#1DA1F2', marginBottom: '10px'
              }}>Use Email</p>
              <p style={{
                width: "140px",
                height: "24px", fontFamily: "Segoe UI",
                fontSize: "18px",
                fontWeight: "700",
                lineHeight: "24px",
                letterSpacing: "0em",
                textAlign: "left",
                flex: 'nowrap'
              }}>Date of birth</p>
              <p style={{
                width: "670px",
                height: "72px",
                opacity: "0.6",
                fontFamily: "Segoe UI",
                fontSize: "16px",
                fontWeight: "400",
                lineHeight: "24px",
                letterSpacing: "0em",
                textAlign: "left", marginBottom: '50px'
              }}>Facilisi sem pulvinar velit nunc, gravida scelerisque amet nibh sit. Quis bibendum ante phasellus metus, magna lacinia sed augue. Odio enim nascetur leo mauris vel eget. Pretium id ullamcorper blandit viverra dignissim eget tellus. Nibh mi massa in molestie a sit. Elit congue.</p>

              <div style={{ display: 'flex', justifyContent:"space-between" }}>
                <select id="dobMonth" style={{
                  width: "312px",
                  height: "70px",
                  borderRadius: "6",
                  border: "1px solid #00000033"
                }} value={dobMonth} onChange={(e) => setDobMonth(e.target.value)}>
                  <option value="">Month</option>
                  <option value="january">january</option>
                  <option value="Febraury">Febraury</option>
                  <option value="March">March</option>
                  <option value="April">April</option>
                  <option value="May">May</option>
                  <option value="June">June</option>
                  <option value="July">July</option>
                  <option value="Augest">Augest</option>
                  <option value="September">September</option>
                  <option value="October">October</option>
                  <option value="November">November</option>
                  <option value="December">December</option>


                </select>
                <select id="dobDay" value={dobDay} onChange={(e) => setDobDay(e.target.value)} style={{
                  width: "159px",
                  height: "70px",
                  borderRadius: "6",
                  border: "1px solid #00000033"
                }} >
                  <option value="">Day</option>
                  <option value="01">01</option>
                  <option value="02">02</option>
                  <option value="03">03</option>
                  <option value="04">04</option>
                  <option value="05">05</option>
                  <option value="06">06</option>
                  <option value="07">07</option>
                  <option value="08">08</option>
                  <option value="09">09</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                  <option value="13">13</option>
                  <option value="14">14</option>
                  <option value="15">15</option>
                  <option value="16">16</option>
                  <option value="17">17</option>
                  <option value="18">18</option>
                  <option value="19">19</option>
                  <option value="20">20</option>
                  <option value="21">21</option>
                  <option value="22">22</option>
                  <option value="23">23</option>
                  <option value="24">24</option>
                  <option value="25">25</option>
                  <option value="26">26</option>
                  <option value="27">27</option>
                  <option value="28">28</option>
                  <option value="29">29</option>
                  <option value="30">30</option>
                  <option value="31">31</option>
                </select>

                <select id="dobYear" style={{
                  width: "159px",
                  height: "70px",
                  borderRadius: "6",
                  border: "1px solid #00000033"
                }} value={dobYear} onChange={(e) => setDobYear(e.target.value)} >
                  <option value="">Year</option>
                  {/* Add options for years here */}
                  <option value="2024">2024</option>
                  <option value="2023">2023</option>
                  <option value="2022">2022</option>
                  <option value="2021">2021</option>
                  <option value="2020">2020</option>
                  <option value="2019">2019</option>
                  <option value="2018">2018</option>
                  <option value="2017">2017</option>
                  <option value="2016">2016</option>
                  <option value="2015">2015</option>
                  <option value="2014">2014</option>
                  <option value="2013">2013</option>
                  <option value="2012">2012</option>
                  <option value="2011">2011</option>
                  <option value="2010">2010</option>
                  <option value="2009">2009</option>
                  <option value="2008">2008</option>
                  <option value="2007">2007</option>
                  <option value="2006">2006</option>
                  <option value="2005">2005</option>
                  <option value="2004">2004</option>
                  <option value="2003">2003</option>
                  <option value="2002">2002</option>
                  <option value="2001">2001</option>
                  <option value="2000">2000</option>
                  <option value="1999">1999</option>
                  <option value="1998">1998</option>
                  <option value="1997">1997</option>
                  <option value="1996">1996</option>
                  <option value="1995">1995</option>
                  <option value="1994">1994</option>
                </select>
              </div>
              <button className='btn btn-primary' type='submit' style={{
                width: "670px",
                height: "60px",
                borderRadius: "30px",
                marginTop:'20px',
                marginLeft:"40px"  
              }}>Next</button>
              </form>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
