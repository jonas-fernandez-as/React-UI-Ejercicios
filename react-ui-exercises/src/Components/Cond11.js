import "./Cond11.css";
import { useReducer, useState } from "react";
import { TYPES } from "../actions/cond11Actions";
import { InitialState, cond11Reducer } from "../reducers/cond11Reducer";
import Message from "./Message";

let regExp = /^[0-9\s-]+$/;

const initialForm = {
  num1: 0,
  num2: 0,
};

const Cond11 = () => {
  const [form, setForm] = useState(initialForm);
  const [state, dispatch] = useReducer(cond11Reducer, InitialState);

  const addition = (n1, n2) =>
    dispatch({ type: TYPES.ADDITION, payload: { n1, n2 } });
  const substraction = (n1, n2) =>
    dispatch({ type: TYPES.SUBSTRACTION, payload: { n1, n2 } });
  const multiplication = (n1, n2) =>
    dispatch({ type: TYPES.MULTIPLICATION, payload: { n1, n2 } });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.num1 > form.num2) {
      substraction(form.num1, form.num2);
    }
    if (form.num1 < form.num2) {
      addition(form.num1, form.num2);
    } else if (form.num1 === form.num2) multiplication(form.num1, form.num2);
  };

  return (
    <div className="condEleven-exercise">
      <h3>Exercise One - Reducer</h3>
      <p>
        <i>
          Challenge: make a program that you be able to put two numbers number
          and returns:
        </i>
      </p>
      <ul>
        <li>Substraction if the first is major than second</li>
        <li>Addition if the first is minor than second</li>
        <li>Multiplication if both are equals</li>
      </ul>

      <h4>Addition, substraction , multiplication with React reducer</h4>
      <form onSubmit={handleSubmit}>
        <label htmlFor="num1">Number One</label>
        <br />
        <br />
        <input
          type={"text"}
          name="num1"
          required
          pattern="^[0-9\s-]+$"
          value={form.num1}
          placeholder="Insert number"
          onChange={handleChange}
        />
        <br />
        <br />
        <label htmlFor="number">Number two</label>
        <br />
        <br />
        <input
          type={"text"}
          name="num2"
          required
          pattern="^[0-9\s-]+$"
          value={form.num2}
          placeholder="Insert number"
          onChange={handleChange}
        />
        <br />
        <br />
        <input type="submit" />
      </form>
      {regExp.test(form.num1) && regExp.test(form.num2) ? (
        <Message msg={state.result} bg="transparent" />
      ) : (
        <Message msg="Only Numbers" bg={"#df4235"} />
      )}
    </div>
  );
};

export default Cond11;
