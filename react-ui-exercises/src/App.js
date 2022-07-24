import CalcOperations from "./Components/CalcOperations";
import CalcSquaring   from "./Components/CalcSquaring"

function App() {
  return (
    <div>
      <h1>Exercises on React</h1>
      <p>
        This is a proyect of React JS, based on an exercises of logical
        programation learned monts before. On this exercises i'm trying to put
        my knowledges of Javascript HTML and CSS
      </p>
      <hr/>
      <h2>Addition</h2>
      <hr/>
      <CalcOperations/>
      <hr/>
      <h2>Squaring</h2>
      <hr/>
      <CalcSquaring/>
      <hr/>
      <h2>Age calcule</h2>
      <p></p>
      <hr/>
    </div>
  );
}

export default App;
