

import "./style.scss"

const Login = () => {
   return (
      <div className='register'>
         <div className="register__wrapper">
            <span className="register__logo">Chat</span>
            <span className="register__title">Register</span>
            <form>
               <input type="email" placeholder="email" />
               <input type="password" placeholder="password" />
               <button>Sign in</button>
            </form>
            <p>Do you don't have an account? Register</p>
         </div>

      </div>
   )
}

export default Login