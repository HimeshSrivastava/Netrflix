import { useSelector } from "react-redux";
import MovieCarts from "./MovieCarts";

const SecondaryContainer = () => {
const movies= useSelector(store=>store.movies)
// console.log(movies);
  return (
    <div className="bg-black">
      {movies.nowPlayingMovies && ( <div>
        <MovieCarts title={"Now Playing Movies"} movies={movies.nowPlayingMovies} />
        <MovieCarts title={"Popular Movies"} movies={movies.nowPlayingMovies} />
        <MovieCarts title={"Treanding Movies"} movies={movies.nowPlayingMovies} />
        <MovieCarts title={"Horror Movies"} movies={movies.nowPlayingMovies} />
  </div>
        )}
    </div>
  )
}

export default SecondaryContainer
