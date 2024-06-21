import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";


const Browse = () => {
  useNowPlayingMovies();

  return (
    <div>
      <Header />
      <div className="w-[1360px]">
        <MainContainer/>
        <SecondaryContainer/>
        {/* {movies.map(movie => (
          <div className="movie-card" key={movie.id}>
            <Link to={`/movie/${movie.id}`}>
            <img 
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
              alt={movie.title} 
              className="movie-poster" 
            />
           </Link>
            <div className="movie-info">
              <h2 className="movie-title">{movie.title}</h2>
              <p className="movie-overview">{movie.overview}</p>
            </div>
          </div>
        ))} */}
      </div>
    </div>
  );
};

export default Browse;
