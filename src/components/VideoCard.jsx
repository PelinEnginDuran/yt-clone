import millify from "millify"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"


const VideoCard =({video, isRow})=>{
    const navigate = useNavigate()
    const [isHover, setIsHover]=useState(false)

   
    return (
        
     <div
      onClick={()=> navigate(`/watch?v=${video.videoId}`)}
     onMouseEnter={()=>setIsHover(true)} 
     onMouseLeave={()=>setIsHover(false)}
     className={`cursor pointer ${isRow && "flex gap-3 items-center"}`}>
        
           <div>
            <img src={
            isHover && video.richThumbnail
            ? video.richThumbnail[video.richThumbnail?.length - 1].url
             : video.thumbnail[video.thumbnail.length - 1].url
            } 
            className={`max-w-none rounded-lg w-full  ${isRow && "w-40"}`}  />
        </div>
        <div className="flex gap-4 mt-5">
            <img className={`w-14 h-14 rounded-full ${isRow && "hidden"}`}
             src={
                video.channelThumbnail ? video.channelThumbnail[0]?.url
                : "/avatar.jpg"
            } 
            />
       
        <div className="text-[#aaa]">
            <h4 className={`font-bold text-white ${isRow && "line-clamp-1"}`} >{video.title.slice(0, 50)}</h4>
            <p>{video.channelTitle}</p>
            <div className= {`flex gap-2 ${isRow && "text-sm gap-1"}`}>
                <p className="line-clamp-1 whitespace-nowrap">{millify(video.viewCount)} Görüntülenme </p>
                <p className="line-clamp-1">{video.publishedTimeText}</p>
            </div>
        </div>
     </div>
     </div>

    )
}
export default VideoCard