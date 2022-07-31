import "./ConditionalRoute.css";
import { Link } from "react-router-dom";

const ConditionalRoute = () => {
  return (
    <div>
      <nav>
      <h2>Condidional exercises</h2>
        <ul>
          <li>
            <Link to="/conditionals/exercise-one">One</Link>
          </li>
          <li>
            <Link to="/conditionals/exercise-two">Two</Link>
          </li>
          <li>
            <Link to="/conditionals/exercise-three">Three</Link>
          </li>
          <li>
            <Link to="/conditionals/exercise-four">Four</Link>
          </li>
          <li>
            <Link to="/conditionals/exercise-five">Five</Link>
          </li>
          <li>
            <Link to="/conditionals/exercise-six">Six</Link>
          </li>
          <li>
            <Link to="/conditionals/exercise-seven">Seven</Link>
          </li>
          <li>
            <Link to="/conditionals/exercise-eight">Eight</Link>
          </li>
          <li>
            <Link to="/conditionals/exercise-nine">Nine</Link>
          </li>
          <li>
            <Link to="/conditionals/exercise-ten">Ten</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default ConditionalRoute;
