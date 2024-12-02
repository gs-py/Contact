import { FaSearch } from "react-icons/fa"
import { CiMenuKebab } from "react-icons/ci";

const NavBar = () => {
  return (
      <div className=" w-full bg-slate-500 rounded-2xl sm:rounded-xl px-2 flex justify-between items-center h-10 sm:h-8 sm:w-[30vw]">
          <FaSearch className=" " />
          <h1>Search Contact</h1>
 
      <CiMenuKebab /></div>
  )
}

export default NavBar