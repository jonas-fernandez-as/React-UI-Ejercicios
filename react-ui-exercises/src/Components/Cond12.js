import "./Cond12.css";
import { TYPES } from "../actions/cond12Actions";
import { cond12Reducer, InitialState } from "../reducers/cond12Reducer";
import Message from "./Message";
import { useState, useReducer } from "react";

let initialForm = {
  litres: 0,
};

let regExp = /^[0-9.\s]+$/;

export default function Cond12() {
  const [state, dispatch] = useReducer(cond12Reducer, InitialState);
  const [form, setForm] = useState(initialForm);

  const nodiscount = (n) =>
    dispatch({ type: TYPES.NO_DISCOUNT, payload: { n } });
  const discount10 = (n) =>
    dispatch({ type: TYPES.DISCOUNT_10, payload: { n } });
  const discount15 = (n) =>
    dispatch({ type: TYPES.DISCOUNT_15, payload: { n } });
  const discount25 = (n) =>
    dispatch({ type: TYPES.DISCOUNT_25, payload: { n } });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.litres <= 100) {
      let num = parseInt(form.litres);
      nodiscount(num);
    }
    if (form.litres >= 101 && form.litres <= 300) {
      let num = parseInt(form.litres);
      discount10(num);
    }
    if (form.litres >= 301 && form.litres <= 500) {
      let num = parseInt(form.litres);
      discount15(num);
    }
    if (form.litres > 500) {
      let num = parseInt(form.litres);
      discount25(num);
    }
  };
  return (
    <div className="condTwelve-exercise">
      <h3>Exercise Two - Reducer</h3>
      <p>
        <i>
          Challenge: make a program that you be able to put a number of total
          litres selled ($15 per litre) and after calculate and return
        </i>
      </p>
      <ul>
        <li>
          If total litres are minor than 100 litres: total does't have discount{" "}
        </li>
        <li>
          If total litres are major than 101 litres and minor than 300 litres:
          discount 10 percent of total
        </li>
        <li>
          If total litres are major than 301 litres and minor than 500 litres:
          discount 15 percent of total
        </li>
        <li>
          If total litres are major than 500 litres: discount 25 percent of
          total
        </li>
      </ul>

      <h4>Discount per litres with React reducer</h4>

      <form onSubmit={handleSubmit}>
        <label>Litres</label>
        <br />
        <br />
        <input
          onChange={handleChange}
          type="text"
          name="litres"
          placeholder="Insert litres"
          required
          pattern="^[0-9\s]+$"
          value={form.litres}
          title={"Please only numbers"}
        />
        <br />
        <br />
        <input type={"submit"} value="Calculate" />
        <br />
        <br />
        {regExp.test(form.litres) ? (
          <Message msg={state.result} bg={"transparent"} />
        ) : (
          <Message msg={"Only numbers"} bg={"#df4235"} />
        )}
      </form>
    </div>
  );
}
