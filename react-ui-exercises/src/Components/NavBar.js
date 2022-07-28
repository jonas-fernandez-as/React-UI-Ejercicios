import {Link} from "react-router-dom"

const MenuBar =()=>{
 return(
  <nav>
   <ol>
    <li><Link to="index">Home</Link></li>
    <li> <Link to="/exercise-one">Exercise One</Link></li>
    <li><Link to="/exercise-two">Exercise Two</Link></li>
    <li><Link to="/exercise-three">Exercise Three</Link></li>
    <li><Link to="/exercise-four">Exercise Four</Link></li>
    <li><Link to="/exercise-five">Exercise Five</Link></li>
    <li><Link to="/exercise-six">Exercise Six</Link></li>
    <li><Link to="/exercise-seven">Exercise Seven</Link></li>
    <li><Link to="/exercise-eight">Exercise Eigth</Link></li>
    <li><Link to="/exercise-nine">Exercise Nine</Link></li>
    <li><Link to="/exercise-ten">Exercise Ten</Link></li>
   </ol>
  </nav>
 )

}


export default MenuBar