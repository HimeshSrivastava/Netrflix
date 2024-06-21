import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactPlayer from 'react-player'
const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  const getMovieDetails = async () => {
    try {
      const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, {
        method: 'GET',
        headers: {
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwOTFiZjkxY2NlNTA5MTYzYjQ2MDNjMWQ4NjIzNzM4ZCIsInN1YiI6IjY2NmIzNTg5ZDBiNjAxMDljYWE3NTVkNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QtvGVw6WA5ZEGDbJfYVarQ666WuNGYaQfvWBmxWRPN0',
          'accept': 'application/json'
        }
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const json = await response.json();
      setMovie(json);
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  };

  useEffect(() => {
    getMovieDetails();
  }, [id]);

  if (!movie) return <div>Loading...</div>;

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>
      <ReactPlayer 
        url={`https://path.to/your/video/${id}`} // Replace with actual video URL
        controls 
        className="video-player"
      />
    </div>
  );
};

export default MovieDetails;
