import "./ConditionalReducerRoute.css";
import { Link } from "react-router-dom";

const ConditionalReducerRoute = () => {
  return (
    <div>
      <nav>
        <h2>Condidional exercises with Reducer</h2>
        <ul>
          <li>
            <Link to="/conditionals-reducer/exercise-one">One</Link>
          </li>
          <li>
            <Link to="/conditionals-reducer/exercise-two">Two</Link>
          </li>
          <li>
            <Link to="/conditionals-reducer/exercise-three">Three</Link>
          </li>
          <li>
            <Link to="/conditionals-reducer/exercise-four">Four</Link>
          </li>
          <li>
            <Link to="/conditionals-reducer/exercise-five">Five</Link>
          </li>
          <li>
            <Link to="/conditionals-reducer/exercise-six">Six</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default ConditionalReducerRoute;
