import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import Popup from 'reactjs-popup';
import UserLogo from '../Images/UserLogo.png'
import swal from 'sweetalert';
import MovieData from '../Movie Data/MovieData';
import { CgProfile } from 'react-icons/cg';

const ModelDiv = styled.div`
    border: 2px solid #91fae3;
    padding: 5px 10px;
`;
const ResponsivePopupContainer = styled.div`
  width:  100vw;
  height: 100vh;
  position: fixed;
  background: rgba(0,0,0,0.1);
  top: 0;
  left: 0;
  z-index: 5;
  & > div {
    @media screen and (max-width: 750px) {
      transform: scale(0.9);
      background: transparent !important;
    }
    @media screen and (max-width: 480px) {
      transform: scale(0.8);
    }
    @media screen and (max-width: 450px) {
      height: 600px !important;
    }
    @media screen and (max-width: 400px) {
      transform: scale(0.75);
    }
  }
`;
const contentStyle = {
  margin: 'auto',
  background: 'rgb(255, 255, 255)',
  width: 'fit-content',
  height: 'auto',
  padding: '5px',
  minWidth: '26%',
  border: '2px solid #d7d7d7'
};
const overlayStyle = {
  background: 'rgba(0,0,0,0.1)',
  width: 'auto',
  height: 'auto',
  overflow: 'auto'
};
const Button = styled.button`
  background: ${props => props.primary ? '#0097f1' : '#FF7F50'};
  color: #ffffff;
  font-size: 1em;
  margin: 1em 0em 1em 1em;
  padding: 0.3em 0.5em;
  border: 2px solid ${props => props.primary ? '#0097f1' : '#FF7F50'};
  border-radius: 3px;
  opacity: 0.7;
  :hover {
    cursor: pointer;
    opacity: 1.0;
  }
  :focus {
    outline:none;
  }
`;

const ProfileDescription = styled.div`
  width:272px;
  height:60px;

  display:flex;
  margin-left:2.5em ;
  justify-content:center;
  text-align: center;
  border-radius:7px;
  padding:7px;
  /* margin: 10px 0px; */
`;
const H5Des = styled.h5`
text-align:center;
margin-top:7px;
padding-top:5px;
margin:auto;
width:570px;
color:white;
font-size:17px;
background-color: #476a46;
border-radius: 20px;
padding:5px 5px;
`;
const ButtonLogout = styled.button`
  background: ${props => props.primary ? '#FF7F50' : '#0097f1'};
  color: #ffffff;
  font-size: 1em;
  margin: 1em 0em 1em 1em;
  padding: 0.3em 0.5em;
  border: 2px solid ${props => props.primary ? '#FF7F50' : '#0097f1'};
  border-radius: 3px;
  opacity: 0.7;
  :hover {
    cursor: pointer;
    opacity: 1.0;
  }
  :focus {
    outline:none;
  }
`;
const ProfileButton = styled.button`
background: ${props => props.primary ? '#FF7F50' : '#0097f1'};
  color: #ffffff;
  font-size: 1em;
  margin: 1em 1em 1em 1em;
  padding: 0em 1em;
  border: 2px solid ${props => props.primary ? '#FF7F50' : '#0097f1'};
  border-radius: 3px;
  opacity: 0.9;
  :hover {
    cursor: pointer;
    opacity: 1.0;
  }
  :focus {
    outline:none;
  }
`;
const ProfileButton1 = styled.button`
background-color:rgb(33, 37, 41);
  color: blue;
  /* height: 25px; */
  font-size: 2em;
  margin: 0em 10px 10px 0em;
  border: none;
  padding: 0em 0em;
  /* border: 2px solid ${props => props.primary ? '#FF7F50' : '#0097f1'}; */
  /* border-radius: 20px; */
  opacity: 0.9;
  :hover {
    cursor: pointer;
    opacity: 1.0;
  }
  :focus {
    outline:none;
  }
`;

const MovieHomePage = () => {

  const [logindata, setLoginData] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

  console.log(logindata, 'mylogindata');

  const history = useNavigate();

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const closePopup = (event) => {
    setModalOpen(false);
  };


  const UserData = () => {
    const getuser = localStorage.getItem("user_login");
    if (getuser && getuser.length) {
      const user = JSON.parse(getuser);

      setLoginData(user);
    }
  }
  const ViewProfile = (event) => {
    setModalOpen(true);
  };

  const userlogout = () => {
    localStorage.removeItem("user_login")
    swal(`User Logout Successfully...!`, "", "success");
    history("/");
  }

  useEffect(() => {
    UserData();
  }, [])

  return (
    <>
      {
        logindata &&
        <>
          <div style={{ backgroundColor: '#212529' }} class="button-div">
          <h5 style={{ float: 'right', textAlign: 'center', marginTop: '7px', paddingTop: '6px', margin: 'auto', width: '150px', color: '#0fdb61' }} class="signup-button">Welcome : <span style={{ color: '#fa7f05' }}>{logindata.length === 0 ? 'welcome' : logindata[0].name}</span></h5>
          <ProfileButton style={{ marginLeft: '25px' }} onClick={() => ViewProfile()} class="login-button">Profile</ProfileButton>
           
          </div>

          <MovieData />
        </>
      }

      {
        logindata.length === 0 ? "errror" :
          <>
            {
              modalOpen &&

              <ResponsivePopupContainer onClick={closePopup}>

                <Popup modal open={modalOpen} onClose={closePopup} {...{ contentStyle, overlayStyle }} >
                  <ModelDiv style={{ margin: '5px 10px', backgroundColor: '#b9c9b9' }}>
                    <div class="button-div">
                      <h5 style={{ textAlign: 'center', marginTop: '7px', paddingTop: '4px', margin: 'auto', color: '#0fdb61', marginRight: '4.3em' }} class="signup-button">Hello : <span style={{ color: '#fa7f05' }}>{logindata.length === 0 ? 'welcome' : logindata[0].name} 😄</span></h5>
                    </div><br /><br /><br />
                    <img style={{ height: '105px', margin: '0px 124px' }} src={UserLogo} alt="" /> <hr style={{ color: 'red' }} />
                    <div style={{ marginLeft: '0px' }}>
                      <ProfileDescription>
                        <H5Des class="signup-button">Name: {logindata[0].name}<span style={{ color: '#fa7f05' }}> </span></H5Des>
                      </ProfileDescription>
                      <ProfileDescription>
                        <H5Des class="signup-button">Email: {logindata[0].email}<span style={{ color: '#fa7f05' }}> </span></H5Des>
                      </ProfileDescription>
                      <ProfileDescription>
                        <H5Des class="signup-button">Contact: {logindata[0].mobile_number}<span style={{ color: '#fa7f05' }}> </span></H5Des>
                      </ProfileDescription>


                    </div>
                    <ButtonLogout style={{ float: 'right', }} danger onClick={() => { closePopup(); }}>Cancel</ButtonLogout>
                    <Button style={{ float: 'right' }} onClick={userlogout}>LogOut</Button >
                  </ModelDiv>
                </Popup>

              </ResponsivePopupContainer>

            }

          </>
      }
    </>
  )
}

export default MovieHomePage