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
          
        </ul>
      </nav>
    </div>
  );
};

export default ConditionalRoute;
