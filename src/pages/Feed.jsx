import { useContext } from "react"
import Sidebar from "../components/sidebar"
import { YoutubeContext } from "../context/youtubeContext"
import VideoCard from "../components/VideoCard"
import Loader from "../components/Loader"

const Feed =()=>{
    const {videos} =useContext(YoutubeContext)
    
    return (
<div className="flex">
<Sidebar/>
<div className="video-layout">
{!videos ? (
    <Loader />) : (videos.map(
        (item,i)=>item.type === "video" && 
            <VideoCard key={i} video={item}/>
    )
    )}

</div>
</div>
)
}
export default Feed