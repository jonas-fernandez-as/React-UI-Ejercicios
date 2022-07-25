import "./CalcOperations.css";
import { useState } from "react";
import Message from "./Message";
let initialState = {
  suma: "",
};
const CalcOperations = () => {
  const [toAdd, setToAdd] = useState(initialState);
  const [addition, setAddition] = useState(0);

  let regExp = /^[0-9,+]*$/;

  const handleChange = (e) => {
    let regExp = /^[0-9,+]*$/;
    if (!regExp.test(e.target.value)) {
    }

    setToAdd({
      ...toAdd,
      [e.target.name]: e.target.value,
    });
  };

  const operation = (number) => {
    //console.log(total)
    let total = 0;
    let numbers = number.split("+");
    numbers.map((el) => (total = parseInt(el) + total));
    setAddition(total);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    operation(toAdd.suma);
  };

  return (
    <article className="calcOperations-article">
      <div className="adittion-exercise">
        <h3>Exercise one</h3>
        <h4>Addition with React</h4>
        <form onSubmit={handleSubmit}>
          <label htmlFor="suma">Addition</label>

          <br />
          <br />
          <input
            type={"text"}
            name={"suma"}
            placeholder={"Put numers separated with(+)"}
            onChange={handleChange}
            value={toAdd.suma}
            required
            title="Only numbers and symbol (+)"
            pattern="^[0-9,+]*$"
          />
          <br />
          <br />
          <input className="submit" type="submit" value={"Addition"} />
        </form>
        {regExp.test(toAdd.suma) ? (
          <Message msg={addition} bg="#fff" />
        ) : (
          <Message msg={"Only numbers and symbol (+)"} bg="#df4235" />
        )}
      </div>
    </article>
  );
};

export default CalcOperations;
