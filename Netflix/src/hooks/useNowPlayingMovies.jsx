import { useEffect} from "react";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../Utils/moviesSlice";
import { API_OPTIONS } from "../Utils/constants";

const useNowPlayingMovies = () => {
    // const [movies, setMovies] = useState([]);

const dispatch=useDispatch();
 
    const getNowPlayingMovies= async()=>{
        try {
            const response= await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1',API_OPTIONS);
          
            const json=await response.json();
            console.log(json);
            dispatch(addNowPlayingMovies(json.results));
            // setMovies(json.results);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        getNowPlayingMovies();
    },[])

}
export default useNowPlayingMovies
