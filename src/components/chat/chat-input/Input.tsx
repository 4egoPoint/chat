
import Img from "../../../img/img.png"
import Attach from "../../../img/attach.png"

import "./input.scss"

const Input = () => {
   return (
      <div className='input'>
         <input type="text" placeholder="Type something..." />
         <div className="input__send">
            <img src={Attach} alt="" />
            <input type="file" style={{display:"none"}} id="file" />
            <label htmlFor="file">
               <img src={Img} alt="" />
            </label>
            <button>Send</button>
         </div>
         
      </div>
   )
}

export default Input