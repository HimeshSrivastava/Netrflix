import { useEffect } from "react";
import { API_OPTIONS } from "../Utils/constants"
import { useDispatch} from "react-redux";
import { addTrailer } from "../Utils/moviesSlice";

 const useMovieTrailer= (movieId)=> {
 const dispatch= useDispatch();
 const getMovieVideos= async(movieId)=>{
        const data = await fetch("https://api.themoviedb.org/3/movie/"+movieId+"/videos?",API_OPTIONS);
        const json= await data.json();
        // console.log(json.results);
        // console.log(movieId);
        const filterData= json.results.filter((video)=>video.type==="Trailer");
        console.log(filterData);
        const Trailer= filterData.length ? filterData[0] : json.results[0];
        console.log(Trailer.key);  
        dispatch(addTrailer(Trailer));
};

useEffect(()=>{
  getMovieVideos(movieId);
},[])


}
export default useMovieTrailer
