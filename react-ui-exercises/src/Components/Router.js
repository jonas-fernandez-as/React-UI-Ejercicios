import "./Router.css";
import { HashRouter, Link, Route, Routes } from "react-router-dom";
import Index from "../pages";
import SequentialRoute from "./SequentialRoutes";
import Eight from "../pages/ex-eight";
import Five from "../pages/ex-five";
import Four from "../pages/ex-four";
import Nine from "../pages/ex-nine";
import One from "../pages/ex-one";
import Seven from "../pages/ex-seven";
import Six from "../pages/ex-six";
import Ten from "../pages/ex-ten";
import Three from "../pages/ex-three";
import Two from "../pages/ex-two";
import ConditionalRoute from "./ConditionalRoute";
import Cond01 from "../pages/cond01";
import Cond02 from "../pages/cond02";
import Cond03 from "../pages/cond03";
import Cond04 from "../pages/cond04";
import Cond05 from "../pages/cond05";
import Cond06 from "../pages/cond06";
import Cond07 from "../pages/cond07";
import Cond08 from "../pages/cond08";
import Cond09 from "../pages/cond09";
import Cond10 from "../pages/cond10";
import ConditionalReducerRoute from "./ConditionalReducerRouter";
import CondR01 from "../pages/condR01";
import CondR02 from "../pages/condR02";
import CondR03 from "../pages/condR03";
import CondR04 from "../pages/condR04";
import CondR05 from "../pages/condR05";
import CondR06 from "../pages/condR06";
import UseERoutes from "./UseERoutes";
import PUseEffect01 from "../pages/pUseEffect01";
import PUseEffect02 from "../pages/pUseEffect02";
import PUseEffect03 from "../pages/pUseEffect03";
import PUseEffect04 from "../pages/pUseEffect04";
import PUseEffect05 from "../pages/pUseEffect05";
import PUseEffect06 from "../pages/pUseEffect06";
const Rout = () => {
  return (
    <div>
      <h1>Exercises on React</h1>
      <HashRouter>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/sequentials">Sequential</Link>
            </li>
            <li>
              <Link to="/conditionals">Conditionals</Link>
            </li>
            <li>
              <Link to="/conditionals-reducer">Conditionals with Reducers</Link>
            </li>
            <li>
              <Link to="/use-effect">Use effect exercises</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route index element={<Index />} />
          <Route path="/sequentials" element={<SequentialRoute />} />
          <Route path="/sequentials/exercise-one" element={<One />} />
          <Route path="/sequentials/exercise-two" element={<Two />} />
          <Route path="/sequentials/exercise-three" element={<Three />} />
          <Route path="/sequentials/exercise-four" element={<Four />} />
          <Route path="/sequentials/exercise-five" element={<Five />} />
          <Route path="/sequentials/exercise-six" element={<Six />} />
          <Route path="/sequentials/exercise-seven" element={<Seven />} />
          <Route path="/sequentials/exercise-eight" element={<Eight />} />
          <Route path="/sequentials/exercise-nine" element={<Nine />} />
          <Route path="/sequentials/exercise-ten" element={<Ten />} />
          <Route path="/conditionals" element={<ConditionalRoute />} />
          <Route path="/conditionals/exercise-one" element={<Cond01 />} />
          <Route path="/conditionals/exercise-two" element={<Cond02 />} />
          <Route path="/conditionals/exercise-three" element={<Cond03 />} />
          <Route path="/conditionals/exercise-four" element={<Cond04 />} />
          <Route path="/conditionals/exercise-five" element={<Cond05 />} />
          <Route path="/conditionals/exercise-six" element={<Cond06 />} />
          <Route path="/conditionals/exercise-seven" element={<Cond07 />} />
          <Route path="/conditionals/exercise-eight" element={<Cond08 />} />
          <Route path="/conditionals/exercise-nine" element={<Cond09 />} />
          <Route path="/conditionals/exercise-ten" element={<Cond10 />} />
          <Route
            path="/conditionals-reducer"
            element={<ConditionalReducerRoute />}
          />
          <Route
            path="/conditionals-reducer/exercise-one"
            element={<CondR01 />}
          />
          <Route
            path="/conditionals-reducer/exercise-two"
            element={<CondR02 />}
          />
          <Route
            path="/conditionals-reducer/exercise-three"
            element={<CondR03 />}
          />
          <Route
            path="/conditionals-reducer/exercise-four"
            element={<CondR04 />}
          />
          <Route
            path="/conditionals-reducer/exercise-five"
            element={<CondR05 />}
          />
          <Route
            path="/conditionals-reducer/exercise-six"
            element={<CondR06 />}
          />
          <Route path="/use-effect" element={<UseERoutes />} />
          <Route path="/use-effect/exercise-one" element={<PUseEffect01 />} />
          <Route path="/use-effect/exercise-two" element={<PUseEffect02 />} />
          <Route path="/use-effect/exercise-three" element={<PUseEffect03 />} />
          <Route path="/use-effect/exercise-four" element={<PUseEffect04 />} />
          <Route path="/use-effect/exercise-five" element={<PUseEffect05 />} />
          <Route path="/use-effect/exercise-six" element={<PUseEffect06 />} />
        </Routes>
      </HashRouter>
    </div>
  );
};

export default Rout;
