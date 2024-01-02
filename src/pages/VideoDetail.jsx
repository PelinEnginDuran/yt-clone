import { useEffect, useState } from "react"
import ReactPlayer from "react-player"
import { useSearchParams } from "react-router-dom"
import { getData } from "./../utils/getData"
import { AiFillLike, AiFillDislike } from "react-icons/ai"
import millify from "millify"
import StringArea from "../components/StringArea"
import  Loader  from "../components/Loader"
import VideoCard from "../components/VideoCard"
import { TfiAlignLeft } from "react-icons/tfi";
import { CiFaceSmile } from "react-icons/ci";
import { data } from "autoprefixer"
import { BsFillHandThumbsUpFill } from "react-icons/bs";
import { HiMiniHandThumbDown } from "react-icons/hi2";



const VideoDetails =()=>{
    const [video, setVideo]=useState()
    const [comments, setComments]=useState([])
   const [searchParams]= useSearchParams()
   const id =searchParams.get("v")

useEffect(()=>{
   
    setVideo(null)
    getData(`/video/info?id=${id}&extend=1`)
    .then ((data)=>setVideo(data))
    const getComments = async () => {
        try {
          const commentId= "ewPsYFEGA5Q"
         
          const commentsData = await getData(`/comments?id=${commentId}`);
          setComments(commentsData);
          console.log(commentsData);

          
        } catch (error) {
          console.error("Error fetching comments:", error);
         
        }
      };
      
    getComments();
}, [id])






    return (
        <div className="detail-page h-screen overflow-auto p-5">
            <div >
            <ReactPlayer
            width={"100%"}
            height={"50vh"}
            controls
            playing

             url={`https://www.youtube.com/watch?v=${id}`} />

            { !video ? <p>Loading...</p> 
            : <>
             <h1 className="my-3 text-xl font-bold">{video.title}</h1>
             <div className="flex justify-between">
                <div className="flex items-center gap-4">
                    <img className="rounded-full w-12 h-12"
                    src={video.channelThumbnail[video.channelThumbnail.length - 1].url} />
                    <div>
                        <h4 className="font-bold">{video.channelTitle}</h4>
                        <p className="text-gray-400">{video.subscriberCountText}</p>
                    </div>
                    <button className="bg-white rounded-full text-black px-3 h-9 transition hover:bg-gray-400">
                        Abone ol</button>

                </div>
                <div className="flex items-center bg-gray-600 rounded-full cursor">
                    <div className="flex items-center gap-3 py-2 px-4 border-r"> <AiFillLike />
                    <p>{video.likeCount}</p></div>
                    <div className="py-2 px-4"><AiFillDislike /></div>
                </div>
             </div>
             <div className="bg-gray-900 rounded p-2 mt-4 cursor-pointer hover:bg-gray-700">
                <div className="flex gap-3">
                    <p>{millify(video.viewCount)} görüntülenme</p>
                    <p>{new Date(video.publishDate).toLocaleDateString()}</p>
                </div>
                <StringArea text={video.description}/>
                

             </div>


             <div className="pt-4">
                <div className="flex gap-7">
                    <p className="font-bold text-lg">{millify(video.viewCount)} Yorum</p>
                    <p className="flex gap-3 items-center"><TfiAlignLeft />Sıralama Ölçütü:</p>
                </div>
             </div>

             <div className="flex gap-4 pt-4 items-center">
             <img src="avatar.jpg" className="rounded-full w-10 h-10 "/>
             <div className="flex flex-col gap-4 pt-4">
               
                <input type="text" placeholder="Yorum Ekleyin..." className=" bg-black text-white w-[900px]" />


               <div >

               </div>
                <div className="flex justify-between">
                <CiFaceSmile />
                <div className="flex gap-3 items-center">
                <p>iptal</p>
                <button className="bg-white rounded-full text-black px-3 h-9 transition hover:bg-gray-400">
                        Yorum Yap</button>
                </div>
               

                </div>
             </div>
             </div>

           <div>
  {/* Yorumları gösteren kısım */}
  <div>
    {comments?.data?.map((comment, index) => (
      <div key={index} className="flex gap-4 pt-4 items-center">
        <img src={"/avatar.jpg"} className="rounded-full w-10 h-10" />
        <div className="flex flex-col gap-4 pt-4">
          <p>{comment.textDisplay}</p>
          <div className="flex gap-3">
          <BsFillHandThumbsUpFill/>
          <HiMiniHandThumbDown/>
          <button>Yanıtla</button>
          </div>
          
         

          {/* Ekstra içerik varsa buraya ekleyebilirsiniz */}
        </div>
      </div>
    ))}
  </div>

  {/* Yorum ekleme kısmı */}
  <div className="flex gap-4 pt-4 items-center">
    <img src="avatar.jpg" className="rounded-full w-10 h-10" />
    <div className="flex flex-col gap-4 pt-4">
      <input
        type="text"
        className="bg-black text-white w-[900px]"
        placeholder="Yorumunuzu buraya yazın"
      />
      <div>

        {/* Eğer ekstra içerik varsa buraya ekleyebilirsiniz */}
      </div>
      <div className="flex justify-between">
        <CiFaceSmile />
        <div className="flex gap-3 items-center">
          <p>iptal</p>
          <button className="bg-white rounded-full text-black px-3 h-9 transition hover:bg-gray-400">
            Yorum Yap
          </button>
        </div>
      </div>
    </div>
  </div>
</div>

             </>
             }
        </div>
        <div className="flex flex-col gap-5 p-3">
            {!video ? (
                <Loader /> ) :
            (video.relatedVideos.data.map((item)=> 
            item.type === "video"
            && <VideoCard isRow={true} video={item} />
            )
            )}

        </div>

    
        </div>
    )
}

export default VideoDetails