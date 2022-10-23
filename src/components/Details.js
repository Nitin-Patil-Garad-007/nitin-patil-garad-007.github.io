import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
// import Details from '../Pages/Details'
// import { NavLink } from 'react-router-dom';
import MovieData from '../Movie Data/MovieData'


const H5 = styled.h5`
float:right;
text-align:center;
margin-top:0px;
border-radius: 5px;
background-color: #dce8e1;
padding:5px 2px;
margin:auto;
width:100px;
color:#0fdb61
`;
const Details = () => {
    const [logindata, setLoginData] = useState([]);
    return (
        <>

            {
                !logindata &&
                <>
                    <div class="button-div">
                        <NavLink to="/home" className="text-decoration-none text-light mx-2"><button style={{ float: 'right' }} class="signup-button"> Signup</button></NavLink>
                        <NavLink to="/login" className="text-decoration-none text-light mx-2"><button class="login-button">Login</button></NavLink>
                    </div>
                    <MovieData />
                </>
            }
            {
                logindata &&
                <>
                    <div style={{ backgroundColor: '#212529' }} class="button-div">

                        <H5 style={{}} class="signup-button"><span style={{ color: '#fa7f05' }}>welcome</span></H5>
                        <NavLink to="/registration" className="text-decoration-none text-light mx-2"><button style={{ float: 'right' }} class="signup-button"> Signup</button></NavLink>
                        <NavLink to="/login" className="text-decoration-none text-light mx-2"><button class="login-button">Login</button></NavLink>
                    </div>
                    <MovieData />
                </>
            }
        </>
    )
}

export default Details






















