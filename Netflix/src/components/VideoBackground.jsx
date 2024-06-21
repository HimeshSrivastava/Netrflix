
import { useSelector} from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({movieId}) => {
  const trailer=useSelector(store=>store.movies?.Trailer);
 useMovieTrailer(movieId);

  return (
    <div className="">
      <iframe className="left-0 right-0 w-[1360px] h-[645px] aspect-video" 
    src={"https://www.youtube.com/embed/c2G18nIVpNE?si="+trailer?.key+"?&autoplay=1&mute=1"} title="YouTube video player" allow="accelerometer; allowFullScreen; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    </div>
  )
}

export default VideoBackground
