

import "./message.scss"

const Message = () => {
   return (
      <div className='message owner'>
         <div className="message__info">
            <img src="https://th.bing.com/th/id/OIP.-j8cci5Xve6vaUzERfArrQHaFS?w=208&h=149&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" />
            <span>just now</span>
         </div>
         <div className="message__content">
            <p>hello</p>
            {/* <img src="https://th.bing.com/th/id/OIP.-j8cci5Xve6vaUzERfArrQHaFS?w=208&h=149&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" /> */}
         </div>
      </div>
   )
}

export default Message