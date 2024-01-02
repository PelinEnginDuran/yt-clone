import { useContext } from "react";
import { categories } from "../pages/constant"
import { YoutubeContext } from "../context/youtubeContext"


const Sidebar = ()=>{
    const {selectedCategory, setSelectedCategory} = useContext(YoutubeContext)
    
    return (
    <div className="flex flex-col p-1 md:p-4">
        {categories.map((item,i)=> (
        <div key={i}>
        <div
        onClick={()=>setSelectedCategory(item)}
         className={`${
            item.name === selectedCategory.name && 'bg-[#2d2d2d]'
         }
         flex items-center py-4 px-2 gap-2 md:px-3 
         text-md md:text-lg cursor-pointer rounded-md transition
          duration-500 hover:bg-[#2d2d2d]`}>
            <span className="max-sm:text-2x1 items-center">{item.icon}</span>
            <span className="max-sm:hidden">{item.name}</span>
        </div>
        {item.divider && <hr/>}
        </div>
        ))}

    </div> 
    )
}
export default Sidebar;