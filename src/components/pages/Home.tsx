

import "./style.scss"
import Sidebar from "../sidebar/sidebar-main/Sidebar"
import Chat from '../chat/chat-main/Chat';

const Home = () => {
   return (
      <div className="home">
         <div className="home__container">
            <Sidebar />
            <Chat />
         </div>
      </div>
   )
}

export default Home