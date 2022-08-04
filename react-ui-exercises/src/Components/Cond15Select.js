import "./Cond15Select.css"



export default function Cond15Select({handleChange}){
 

 
 return(
    
  <div>
  <select name="type" defaultValue={"type"} onChange={handleChange} >
   <option value="type">Select model</option>
   <option value="i5">-  i5  -</option>
   <option value="i7">-  i7  -</option>
   <option value="i9">-  i9  -</option>
  </select>
  <br/><br/>
  <select name="ram" defaultValue={"ram"} onChange={handleChange}>
   <option value="ram">Select RAM</option>
   <option value="8ram"> 8 RAM </option>
   <option value="16ram"> 16 RAM </option>
   <option value="32ram"> 32 RAM </option>
  </select>
  <br/><br/>
  <select name="pay" defaultValue={"pays"} onChange={handleChange}>
   <option value="pays" >Type of pay</option>
   <option value="cash">Cash</option>
   <option value="card">Card</option>
  </select>
  <br/><br/>
 </div>
 )
}