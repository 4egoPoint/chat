

import Sidebar from "../../sidebar/sidebar-main/Sidebar"
import "./header.scss"

const Header = () => {
   return (
      <div className="c-header">
         <label className="c-header__menu">
            <input type="checkbox"/>
         </label>
         <Sidebar />
      </div>
   )
}

export default Header