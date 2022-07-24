import "./Message.css"
export default function Message  ({msg,bg}) {
 return(
  <div  className="message" style={{backgroundColor:`${bg}`}}>
   <p>{msg}</p>
  </div>
 )
} 