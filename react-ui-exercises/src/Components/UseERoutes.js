import {Link} from "react-router-dom";

const UseERoutes = () => {
  return (
    <div>
        <nav>
         <h2>UseEffect exercises</h2>
          <ul>
            <li>
              <Link to="/use-effect/exercise-one">One</Link>
            </li>
            <li>
              <Link to="/use-effect/exercise-two">Two</Link>
            </li>
            <li>
              <Link to="/use-effect/exercise-three">Three</Link>
            </li>
            <li>
              <Link to="/use-effect/exercise-four">Four</Link>
            </li>
           </ul>
        </nav>
        
    </div>
  );
};

export default UseERoutes;
