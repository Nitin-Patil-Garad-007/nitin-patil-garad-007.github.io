import React, { useEffect, useState } from "react"
import "./home.css"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import TrendingMovieBox from "./TrendingMovieBox";

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
                            <TrendingMovieBox key={movie.id} {...movie}/>                            
                            </>
                        ))
                    }
                    
                </Carousel>
            </div>
        </>
    )
}

export default TrendingMovies