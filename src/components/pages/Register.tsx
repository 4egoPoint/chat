
import Add from "../../img/addAvatar.png"
import "./style.scss"

const Register = () => {
   return (
      <div className='register'>
         <div className="register__wrapper">
            <span className="register__logo">Chat</span>
            <span className="register__title">Register</span>
            <form>
               <input type="text" placeholder="display name" />
               <input type="email" placeholder="email" />
               <input type="password" placeholder="password" />
               <input style={{display:"none"}} type="file" id="file" />
               <label htmlFor="file">
                  <img src={Add} alt="add" />
                  <span>Add an avatar</span>
               </label>
               <button>Sign Up</button>
            </form>
            <p>Do you have an account? Login</p>
         </div>

      </div>
   )
}

export default Register