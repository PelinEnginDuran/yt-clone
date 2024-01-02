import { useSearchParams } from "react-router-dom"
import SideBar from "./../components/Sidebar"
import { useEffect, useState } from "react"
import { getData } from "../utils/getData"
import Loader from "../components/Loader"
import VideoCard from "../components/VideoCard"

const SearchResults =()=>{
    const [results,SetResults]=useState(null)
    const [searchParams]=useSearchParams()
    const query=searchParams.get("search_query")
    useEffect(()=>{
        SetResults(null)

        getData(`/search?query=${query}&type=video`).then((data)=>
        SetResults(data)
        )
    },[query])
    return (
    <div className="flex">
        <SideBar />
        <div className="flex justify-center flex-1 gap-5 p-4 h-screen overflow-auto">
            <div className="flex flex-col max-w-lg gap-7">
                <p className="text-lg">
                    <span className="font-bold">{query}</span> için sonuçlar;</p>
            {!results ? (
            <Loader/>
            ):(
                results.data.map(
                    (item)=>item.type === "video" && <VideoCard video={item} />
                    )
                )}
                </div>

        </div>
    </div>)
}
export default SearchResults