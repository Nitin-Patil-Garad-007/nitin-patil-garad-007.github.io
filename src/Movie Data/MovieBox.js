import { Modal, Button } from 'react-bootstrap';
import React, { useState } from 'react';
import styled from 'styled-components';
const API_IMG = "https://image.tmdb.org/t/p/w500/";

const ImgBox = styled.div`
height: 2em;
width: 16em;
margin: 0em 0em 4em 0em;

`;
const MovieImg=styled.img`
&:hover,
  &:focus {
    border: 1px solid orange;
  }
`;
const MovieTitile = styled.div`
  width:300px;
  height:60px;
  display:flex;
  float: right;
  justify-content:center;
  /* align-items:center; */
  text-align: center;
  border-radius:7px;
  padding:7px;
`;
const MovieTitileModel = styled.div`
  width:400px;
  height:60px;

  display:flex;

  margin-left:1.5em ;
  justify-content:center;
  /* align-items:center; */
  text-align: center;
  border-radius:7px;
  padding:7px;
`;
const MovieDescriptionModel = styled.div`
  width:300px;
  height:36px;

  display:flex;
  margin-left:4.5em ;
  justify-content:center;
  text-align: center;
  border-radius:7px;
  padding:7px;
`;
const H5Des = styled.h5`
text-align:center;
margin-top:7px;
padding-top:5px;
margin:auto;
width:570px;
color:#deac18;
font-size:18px;
background-color: #91faf6;
border-radius: 20px;
padding:1px 0px 0px 5px;
`;
const MovieBox = (props) => {
 const { original_title, original_language, poster_path, vote_average, release_date, overview }=props;
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <>

      <div style={{ margin: ' 0px 10px' }} className="card text-center bg-secondary mb-3">
        <div className="card-body">
          <ImgBox>
            <button type="button" className="btn btn-dark" onClick={handleShow} >
              <MovieImg className="card-img-top" src={API_IMG + poster_path} />
            </button>
            <MovieTitile>
              <h5 style={{ float: 'right', textAlign: 'center', marginTop: '7px', paddingTop: '7px', margin: '5px 0px 0 45px', width: '570px', color: '#0066ff', fontSize: '17px', padding: '1px 0px 0px 5px' }} class="signup-button">{original_title} <span style={{ color: '#fa7f05' }}> </span></h5>
            </MovieTitile>
          </ImgBox>
          <div className="card-body">

            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title></Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <img className="card-img-top" style={{ width: '8rem', margin: '0px 10em', border: '3px solid #07f537' }} src={API_IMG + poster_path} />
                <MovieTitileModel>
                  <h5 style={{ textAlign: 'center', marginTop: '7px', paddingTop: '5px', margin: 'auto', width: '570px', color: 'blue', fontSize: '20px', padding: '1px 0px 0px 5px' }} class="signup-button">{original_title} <span style={{ color: '#fa7f05' }}> </span></h5>
                </MovieTitileModel>
                <MovieDescriptionModel>
                  <H5Des class="signup-button">IMDb Rating: {vote_average}<span style={{ color: '#fa7f05' }}> </span></H5Des>
                </MovieDescriptionModel>
                <MovieDescriptionModel>
                  <H5Des class="signup-button">Release Date: {release_date}<span style={{ color: '#fa7f05' }}> </span></H5Des>
                </MovieDescriptionModel>
                <MovieDescriptionModel>
                  <H5Des class="signup-button">Type: Movie<span style={{ color: '#fa7f05' }}> </span></H5Des>
                </MovieDescriptionModel>
                <MovieDescriptionModel>
                  <H5Des class="signup-button">Language: {original_language}<span style={{ color: '#fa7f05' }}> </span></H5Des>
                </MovieDescriptionModel>

                <h6 style={{ marginTop: '5px' }}>Overview</h6>
                <p style={{ border: "1px solid red", padding: '3px', backgroundColor: 'pink', borderRadius: '10px' }}>{overview}</p>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Close</Button>
              </Modal.Footer>
            </Modal>
          </div>
        </div>
      </div>
    </>
  )
}

export default MovieBox;