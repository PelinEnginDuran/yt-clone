import { Link, useNavigate } from "react-router-dom"
import { IoMdSearch } from "react-icons/io";
import { FaBell } from "react-icons/fa";
import { MdVideoCameraBack } from "react-icons/md";


const Header =()=>{
    const navigate=useNavigate()
    const handleSubmit=(e)=>{
        e.preventDefault()
        const text =e.target[0].value
        navigate(`/results?search_query=${text}`)

        

    }
    return (
    <header className="flex justify-between items-center p-4">
        <Link to={"/"} className="flex items-center gap-10">
        <img className="w-[60px]" src="/zyro-image.png"  />
        <h1 className="text-2x1 max-sm:hidden">YouTube</h1>
        </Link>

        <form onSubmit={handleSubmit}
        className="flex items-center border border-gray-500 rounded-[20px]">
            <input className="bg-black outline-none rounded-[20px] px-3 py-1" type="text" />
            <button className="border-l px-2"><IoMdSearch /></button>
        </form>
        <div className="flex gap-3 text-xl cursor-pointer">
        <FaBell className="hover:text-gray-400"/>
        <MdVideoCameraBack className="hover:text-gray-400" />
           
        </div>
        
    </header>
    )
}
export default Header