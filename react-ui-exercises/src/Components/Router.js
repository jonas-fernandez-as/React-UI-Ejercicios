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
          <Route path="/conditionals" element={<ConditionalRoute/>}/>
          <Route path="/conditionals/exercise-one" element={<Cond01/>}/>
          <Route path="/conditionals/exercise-two" element={<Cond02/>}/>
          <Route path="/conditionals/exercise-three" element={<Cond03/>}/>
          <Route path="/conditionals/exercise-four" element={<Cond04/>}/>
          <Route path="/conditionals/exercise-five" element={<Cond05/>}/>
          <Route path="/conditionals/exercise-six" element={<Cond06/>}/>
          <Route path="/conditionals/exercise-seven" element={<Cond07/>}/>
          <Route path="/conditionals/exercise-eight" element={<Cond08/>}/>
          <Route path="/conditionals/exercise-nine" element={<Cond09/>}/>
          <Route path="/conditionals/exercise-ten" element={<Cond10/>}/>

        </Routes>
      </HashRouter>
    </div>
  );
};

export default Rout;
