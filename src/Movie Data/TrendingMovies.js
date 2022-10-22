import React, { useEffect, useState } from "react"
import "./home.css"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Link } from "react-router-dom";
import MovieData from "./MovieData";
import { Modal,show,Button} from 'react-bootstrap';
import styled from "styled-components";
const API_IMG="https://image.tmdb.org/t/p/w500/";

const MovieTitileModel=styled.div`
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
const MovieDescriptionModel=styled.div`
  width:300px;
  height:40px;

  display:flex;
  margin-left:4.5em ;
  justify-content:center;
  text-align: center;
  border-radius:7px;
  padding:7px;
`;
const H5Des=styled.h5`
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
const MovieTitle=styled.div`
 @media screen and (max-width: 1250px) {
     font-size: 3rem;
    }
 @media screen and (max-width: 760px) {
     font-size: 2rem;
    }
 @media screen and (max-width: 460px) {
     font-size: 1.2rem;
    }
`;
const Descritption=styled.div`
 @media screen and (max-width: 860px) {
display:'none';  
}
`;


const TrendingMovies = () => {

    const [ popularMovies, setPopularMovies ] = useState([]);
    console.log(popularMovies,'popularMovies');
    const [show, setShow]=useState(false);

    const handleShow=()=>setShow(true);
    const handleClose=()=>setShow(false);


    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=e0852db878d09b2f4caec317b6184bcc&language=en-US")
        .then(res => res.json())
        .then(data => setPopularMovies(data.results))
        
    }, [])

    return (
        <>
            <div  className="poster">
                <Carousel
                    showThumbs={false}
                    autoPlay={true}
                    transitionTime={1}
                    infiniteLoop={true}
                    showStatus={false}
                >
                    {
                        popularMovies.map(movie => (
                            <>
                            {/* <Link style={{textDecoration:"none",color:"white"}} to={`/movie/${movie.id}`} > */}
                                <button type="button" className="btn btn-dark" onClick={handleShow} >
                                    {/* <img className="card-img-top" src={API_IMG + poster_path} /> */}
                                
                                <div style={{margin:'20px'}} className="posterImage">
                                    <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} />
                                </div>
                                <div  className="posterImage__overlay">
                                    <MovieTitle className="posterImage__title">{movie ? movie.original_title: ""}</MovieTitle>
                                    <div className="posterImage__runtime">
                                        {movie ? movie.release_date : ""}
                                        <span className="posterImage__rating">
                                            {movie ? movie.vote_average :""}
                                            <i className="fas fa-star" />{" "}
                                        </span>
                                    </div>
                                    <Descritption className="posterImage__description">{movie ? movie.overview : ""}</Descritption>
                                </div>
                                </button>
                            {/* </Link> */}
                            
                            </>
                        ))
                    }
                    
                </Carousel>
               
            </div>
        </>
    )
}

export default TrendingMovies