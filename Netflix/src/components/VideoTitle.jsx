

const VideoTitle = ({title,overview}) => {
  return (
    <div className="w-[1360px] h-full pt-[15%] px-6 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-3xl font-bold ">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div className="">
      <button className=" bg-white text-black text-lg font-bold px-14 p-3 rounded-lg hover:bg-opacity-80">Play</button>
      <button className="mx-2 bg-white text-black text-lg font-bold px-14 p-3 bg-opacity-40 rounded-lg">More Info</button>
      </div>
      
    </div>
  )
}

export default VideoTitle
