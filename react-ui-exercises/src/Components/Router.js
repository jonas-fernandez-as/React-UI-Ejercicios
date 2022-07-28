import "./Router.css"
import { HashRouter, Link, Route, Routes } from "react-router-dom";
import Eight from "../pages/ex-eight";
import Five from "../pages/ex-five";
import Four from "../pages/ex-four";
import Nine from "../pages/ex-nine";
import One from "../pages/ex-one";
import Seven from "../pages/ex-seven";
import Six from "../pages/ex-six";
import Ten from "../pages/ex-ten";
import Thre from "../pages/ex-thre";
import Two from "../pages/ex-two";
import Index from "../pages";

const Rout = () => {
  return(
  <div>
    <h1>Exercises on React</h1>
    <HashRouter>
      <nav>
        <ul>
          <li>

           <Link to="/">Home</Link>
          </li>
          <li>
            
            <Link to="/exercise-one">Exercise One</Link>
          </li>
          <li>
            <Link to="/exercise-two">Exercise Two</Link>
          </li>
          <li>
            <Link to="/exercise-thre">Exercise Thre</Link>
          </li>
          <li>
            <Link to="/exercise-four">Exercise Four</Link>
          </li>
          <li>
            <Link to="/exercise-five">Exercise Five</Link>
          </li>
          <li>
            <Link to="/exercise-six">Exercise Six</Link>
          </li>
          <li>
            <Link to="/exercise-seven">Exercise Seven</Link>
          </li>
          <li>
            <Link to="/exercise-eight">Exercise Eigth</Link>
          </li>
          <li>
            <Link to="/exercise-nine">Exercise Nine</Link>
          </li>
          <li>
            <Link to="/exercise-ten">Exercise Ten</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route index element={<Index/>}/>
        <Route path="/exercise-one" element={<One/>}/>
        <Route path="/exercise-two" element={<Two/>}/>
        <Route path="/exercise-thre" element={<Thre/>}/>
        <Route path="/exercise-four" element={<Four/>}/>
        <Route path="/exercise-five" element={<Five/>}/>
        <Route path="/exercise-six" element={<Six/>}/>
        <Route path="/exercise-seven" element={<Seven/>}/>
        <Route path="/exercise-eight" element={<Eight/>}/>
        <Route path="/exercise-nine" element={<Nine/>}/>
        <Route path="/exercise-ten" element={<Ten/>}/>
      </Routes>
    </HashRouter>
  </div>
  )
};

export default Rout;
