import "./SequentialRoutes.css";
import {Link} from "react-router-dom";

const SequentialRoute = () => {
  return (
    <div>
        <nav>
         <h2>Sequential exercises</h2>
          <ul>
            <li>
              <Link to="/sequentials/exercise-one">One</Link>
            </li>
            <li>
              <Link to="/sequentials/exercise-two">Two</Link>
            </li>
            <li>
              <Link to="/sequentials/exercise-three">Three</Link>
            </li>
            <li>
              <Link to="/sequentials/exercise-four">Four</Link>
            </li>
            <li>
              <Link to="/sequentials/exercise-five">Five</Link>
            </li>
            <li>
              <Link to="/sequentials/exercise-six">Six</Link>
            </li>
            <li>
              <Link to="/sequentials/exercise-seven">Seven</Link>
            </li>
            <li>
              <Link to="/sequentials/exercise-eight">Eigth</Link>
            </li>
            <li>
              <Link to="/exercise-nine">Nine</Link>
            </li>
            <li>
              <Link to="/sequentials/exercise-ten">Ten</Link>
            </li>
          </ul>
        </nav>
        
    </div>
  );
};

export default SequentialRoute;
