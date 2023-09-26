

import "./navbar.scss"

const Navbar = () => {
   return (
      <div className="navbar">
         <span className="navbar__logo">Chat</span>
         <div className="navbar__user">
            <img src="https://th.bing.com/th/id/OIP.-j8cci5Xve6vaUzERfArrQHaFS?w=208&h=149&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" />
            <span>John</span>
            <button>Logout</button>
         </div>
         
      </div>
   )
}

export default Navbar