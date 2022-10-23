import React, { useState } from 'react';
import styled from 'styled-components';
import { Modal, Button } from 'react-bootstrap';
const API_IMG = "https://image.tmdb.org/t/p/w500/";


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
const MovieTitle = styled.div`
font-size: 3rem;
 @media screen and (max-width: 1250px) {
     font-size: 2.5rem;
    }
 @media screen and (max-width: 760px) {
     font-size: 2rem;
    }
 @media screen and (max-width: 460px) {
     font-size: 1.2rem;
    }
`;
const Descritption = styled.div`
 @media screen and (max-width: 860px) {
display:'none';  
}
`;
const MovieDescriptionModel = styled.div`
  width:300px;
  height:40px;

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
const PosterImg = styled.div`
 margin: auto;
    display: block;
    width: 100%;
    height: 30em;
    @media screen and (max-width: 1100px) {
        height: 30em;
    }
    @media screen and (max-width: 800px) {
        height: 25em;
    }
    @media screen and (max-width: 650px) {
        height: 18em;
    }
`;

const TrendingMovieBox = (props) => {
    const { backdrop_path, original_title, poster_path, original_language, overview, release_date, vote_average } = props;
    const [show, setShow] = useState(false);
    const [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = 650;

    React.useEffect(() => {
        window.addEventListener("resize", () => setWidth(window.innerWidth));

    }, []);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    return (
        <div>
            
            <button type="button" className="btn btn-dark" onClick={handleShow} >
                <PosterImg className="posterImage">
                    <img src={`https://image.tmdb.org/t/p/original${backdrop_path}`} />
                </PosterImg>

                <div className="posterImage__overlay">
                <MovieTitle style={{color:'blue',fontSize:'2em'}} className="posterImage__title">Trending...</MovieTitle>
                    <MovieTitle className="posterImage__title">{original_title}</MovieTitle>
                    <div className="posterImage__runtime">
                        {release_date}

                        {
                            width < breakpoint ? '' : <span className="posterImage__rating">

                                {vote_average}
                                <i className="fas fa-star" />{" "}
                            </span>
                        }

                    </div>
                    {width < breakpoint ? '' : <Descritption className="posterImage__description">{overview}</Descritption>

                    }

                </div>
            </button>

            <div className="card-body">

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title></Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <img className="card-img-top" style={{ width: '12rem', margin: '0px 8em', border: '3px solid #07f537' }} src={API_IMG + poster_path} />
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
                        <p style={{ border: "1px solid red", padding: '10px', backgroundColor: 'pink', borderRadius: '10px' }}>{overview}</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
            {/* =============================== */}
        </div>
    )
}

export default TrendingMovieBox