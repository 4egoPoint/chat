

import Chats from "../sidebar-chats/Chats"
import Navbar from "../sidebar-nav/Navbar"
import Search from "../sidebar-search/Search"

import "./sidebar.scss"

const Sidebar = () => {
   return (
      <div className="sidebar">
         <Navbar />
         <Search />
         <Chats />
      </div>
   )
}

export default Sidebar