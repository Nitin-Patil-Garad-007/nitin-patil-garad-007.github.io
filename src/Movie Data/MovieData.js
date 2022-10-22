import React,{useState,useEffect} from 'react';
// import './App.css';
import styled from 'styled-components';
import MovieBox from './MovieBox';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar,Container,Nav,Form, FormControl } from 'react-bootstrap';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Link } from "react-router-dom";
// import { BiCameraMovie } from 'react-icons/Bi';
import { FcSearch } from "react-icons/fc";
import MovieIcon from '../Images/MovieIcon.png'
import swal from 'sweetalert';
import TrendingMovies from './TrendingMovies'

const MovieListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 30px;
  justify-content: space-evenly;
  gap: 24px;    
  height: 23em;
`;

const Head = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: white;
  font-size: 1.6rem;
  font-weight: bolder;
  /* box-shadow: 0px 3px 6px 0 #555; */
  align-items: center;
`;
const Appname = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const InputCss=styled.input`
  width: 17em;
  border: 2px solid #aaa;
  /* margin: 8px 0; */
  outline: none;
  padding: 3px;
  box-sizing: border-box;
  border-radius: 10em;
  text-align: center;
  transition: 1s;
  font-size: 22px;
margin-right: 10px;

&:focus{
  border-color: dodgerblue;
  box-shadow: 0 0 30px 0 dodgerblue;
}
@media (max-width: 1000px) {
    /* flex-direction: column; */
    font-size: 15px;
  }
@media (max-width: 768px) {
    /* flex-direction: column; */
    font-size: 10px;
  }
`;
const Button = styled.button`
  background-color:#212529;
  border: none;
  /* color: black; */
  /* font-size: 1em; */
  /* margin: 1em 0em 1em 1em; */
  /* padding: 0.4em 1em; */
  /* border: 2px solid ${props => props.primary ? '#0097f1' : '#FF7F50'}; */
  /* border-radius: 3px; */
  opacity: 0.6;
  :hover {
    cursor: pointer;
    opacity: 2.0;
  }
  :focus {
    outline:none;
  }
`;
const MovieImg = styled.img`
  width: 30px;
  height: 30px;
  margin: 10px;
  margin-right: 0px;
  border-radius: 30px;
`;

const API_URL="https://api.themoviedb.org/3/movie/popular?api_key=e0852db878d09b2f4caec317b6184bcc";
const API_SEARCH="https://api.themoviedb.org/3/search/movie?api_key=e0852db878d09b2f4caec317b6184bcc&query";
function MovieData() {

  const [movies, setMovies]=useState([]);
  const [query, setQuery]=useState('');
  const [ popularMovies, setPopularMovies ] = useState([]);
  const [showTrendingMovie, setshowTrendingMovie] = useState(true);


  useEffect(() => {
    fetch(API_URL)
    .then((res)=>res.json())
    .then(data=>{
      console.log(data,'sdfjsdhfiueh');
      setMovies(data.results);
    })
  }, [])


  const searchMovie = async(e)=>{
    e.preventDefault();
    console.log("Searching");
    try{
      const url=`https://api.themoviedb.org/3/search/movie?api_key=e0852db878d09b2f4caec317b6184bcc&query=${query}`;
      const res= await fetch(url);
      const data= await res.json();
      console.log(data);
      setshowTrendingMovie(false)
      setMovies(data.results);
    }
    catch(e){
      console.log(e);
    }
   
  }

  useEffect(() => {
      fetch("https://api.themoviedb.org/3/movie/popular?api_key=e0852db878d09b2f4caec317b6184bcc&language=en-US")
      .then(res => res.json())
      .then(data => setPopularMovies(data.results))
  }, [])

  const changeHandler=(e)=>{
    setQuery(e.target.value);
  }
  return (
    <>
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container fluid>
      <Head className="searchbox">
        <Appname>
          <MovieImg  src={MovieIcon}/>
          <div style={{ color: "red" }}>React</div>Movies
        </Appname>
        </Head>
               <Navbar.Toggle aria-controls="navbarScroll"></Navbar.Toggle>

          <Navbar.Collapse id="nabarScroll">
            <Nav 
            className="me-auto my-2 my-lg-3"
            style={{maxHeight:'100px'}}
            navbarScroll></Nav>

            <Form className="d-flex" onSubmit={searchMovie} autoComplete="off">
            <InputCss placeholder="Search Movies" value={query} onChange={changeHandler} />  
            
            <Button  type="submit"><FcSearch style={{fontSize:'40px'}}/></Button>

            </Form>
            
          </Navbar.Collapse>
      </Container>
    </Navbar> <br />
    <div>
    {
      showTrendingMovie &&
      <TrendingMovies />
    }
           

      {movies.length > 0 ?(
        <div >
        {/* <div className="grid"> */}
            <MovieListContainer className='ijZktC'>
          {movies.map((movieReq)=>
          <MovieBox key={movieReq.id} {...movieReq}/>)}
          </MovieListContainer>
            {/* </div> */}
    </div>
      ):(
        <h2>Sorry !! No Movies Found</h2>
      )}
    </div>   
    </>
   
  );
}

export default MovieData;
