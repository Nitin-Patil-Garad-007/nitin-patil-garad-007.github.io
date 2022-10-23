import React,{useState,useEffect} from 'react';
import styled from 'styled-components';
import MovieBox from './MovieBox';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar,Container,Nav,Form } from 'react-bootstrap';
import "react-responsive-carousel/lib/styles/carousel.min.css";
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
  width: 15em;
  height: 2.1em;
  border: 2px solid #aaa;
  /* margin: 8px 0; */
  outline: none;
  padding: 0px;
  box-sizing: border-box;
  border-radius: 10em;
  text-align: center;
  transition: 1s;
  font-size: 17px;
margin-right: 10px;
@media screen and (max-width: 850px) {
  margin:9.5px 0px;
}
@media screen and (max-width: 770px) {
  margin:14.5px 0px;
  height: 2.1em;
  width: 15em;
}
@media screen and (max-width: 520px) {
  margin:0px 0px 13px;
  height: 2.1em;
  width: 15em;
}

&:focus{
  border-color: dodgerblue;
  box-shadow: 0 0 30px 0 dodgerblue;
}
@media (max-width: 1000px) {
    /* flex-direction: column; */
    font-size: 15px;
  }
@media (max-width: 770px) {
    /* flex-direction: column; */
    font-size: 10px;
  }
`;
const Button = styled.button`
  background-color:#212529;
  border: none;
  height: 10px;
  width: 5x;

  @media (max-width: 850px) {
    /* flex-direction: column; */
    margin-top: 6px;
  }
@media (max-width: 768px) {
    /* flex-direction: column; */
    font-size: 10px;
  }
  @media screen and (max-width: 520px) {
    margin-top: -8px;
    
  }
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
// const API_SEARCH="https://api.themoviedb.org/3/search/movie?api_key=e0852db878d09b2f4caec317b6184bcc&query";
function MovieData() {

  const [movies, setMovies]=useState([]);
  const [query, setQuery]=useState('');
  const [ popularMovies, setPopularMovies ] = useState([]);
  const [showTrendingMovie, setshowTrendingMovie] = useState(true);

  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 850;

  React.useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);


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
    if(query.trim().length ===0){
      swal('Please Enter Movie Name !','',"error")
    }else{
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
      {/* <Container fluid> */}
      <Head className="searchbox">
      {
              width < breakpoint ? '' : 
              <Appname>
                <MovieImg  src={MovieIcon}/>
                <div style={{ color: "red" }}>React</div>Movies
              </Appname>          
}
</Head>
               {/* <Navbar.Toggle aria-controls="navbarScroll"></Navbar.Toggle> */}

          {/* <Navbar.Collapse id="nabarScroll"> */}
            <Nav 
            className="me-auto my-2 my-lg-3"
            style={{maxHeight:'20px'}}
            navbarScroll></Nav>
         <Form className="d-flex" onSubmit={searchMovie} autoComplete="off">
              <InputCss placeholder="Search Movies" value={query} onChange={changeHandler} />  
              <Button  type="submit"><FcSearch style={{fontSize:'40px'}}/></Button>
              </Form>
            
          {/* </Navbar.Collapse> */}
      {/* </Container> */}
    </Navbar> <br />
    <div>
    {
      showTrendingMovie &&
      <TrendingMovies />
    }
           
      {movies.length > 0 ?(
        <div >
            <MovieListContainer className='ijZktC'>
          {movies.map((movieReq)=>
          <MovieBox key={movieReq.id} {...movieReq}/>
          )}
          </MovieListContainer>
    </div>
      ):(
        <h2>!! Sorry Movies Not Found !! 😭</h2>
      )}
    </div>   
    </>
   
  );
}

export default MovieData;
