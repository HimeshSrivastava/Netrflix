import { IMG_CDN_URL } from "../Utils/constants"

const MovieCard = ({poster}) => {
  return (
    <div className=" w-48 px-2">
      <img src={IMG_CDN_URL+poster} alt="poster" />
    </div>
  )
}

export default MovieCard
