import React, {useState } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
// import Details from '../Pages/Details'
// import { NavLink } from 'react-router-dom';
import MovieData from '../Movie Data/MovieData'


const H5=styled.h5`
float:right;
text-align:center;
margin-top:7px;
padding-top:4px;
margin:auto;
width:100px;
color:#0fdb61
`;
const Details = () => {
    const [logindata, setLoginData] = useState([]);
    /* const [modalOpen, setModalOpen] = useState(false); */
    /* const [show, setShow] = useState(false); */
    
    /* const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
     */

    
    /* const ViewProfile = (event) => {
        setModalOpen(true);
      }; */

    return (
        <>
        
       {
        !logindata && 
        <>
        
                    <div class="button-div">
                     <NavLink to="/home" className="text-decoration-none text-light mx-2"><button style={{float:'right'}} class="signup-button"> Signup</button></NavLink> 
                   <NavLink to="/login" className="text-decoration-none text-light mx-2"><button class="login-button">Login</button></NavLink>
                   {/* </Head> */}
                </div>  
                    {/* </MyDiv>
                       
                        
                    </Nav>
                </Container>
            </Navbar> */}
            <MovieData />
            {/* </FlexibleDiv> <br /> <br /> */}
        </>
       }
       {
        logindata && 
        <>
                <div style={{backgroundColor:'#212529'}} class="button-div">
                
                   <H5 style={{}} class="signup-button"><span style={{color:'#fa7f05'}}>welcome</span></H5>             
                   <NavLink to="/registrationPage" className="text-decoration-none text-light mx-2"><button style={{float:'right'}} class="signup-button"> Signup</button></NavLink> 
                   <NavLink to="/login" className="text-decoration-none text-light mx-2"><button class="login-button">Login</button></NavLink>
                </div>                    
           
        <MovieData />
     </>
       }
        
            
        </>
    )
}

export default Details






















