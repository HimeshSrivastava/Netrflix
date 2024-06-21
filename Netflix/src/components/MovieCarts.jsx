
import MovieCard from "./MovieCard";

const MovieCarts = ({title,movies}) => {
    console.log(movies);
  return (
    <div>
         <h2 className="text-3xl pt-5 p-4 text-white ">{title}</h2>
<div className="flex overflow-x-scroll">
        <div className="flex ">
        {movies.map(movie=> <MovieCard key={movie.id} poster={movie.poster_path} /> )}
        </div>
    </div>
    </div>
    
  )
}

export default MovieCarts
