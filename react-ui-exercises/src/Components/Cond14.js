import "./Cond14.css";
import { useReducer, useState } from "react";
import { TYPES } from "../actions/cond14Actions";
import { cond14Reducer, InitialState } from "../reducers/cond14Reducer";
import Message from "./Message";

let regExp = /^[0-9.\s-]+$/;

const initialForm = {
  side1: 0,
  side2: 0,
  side3: 0
};

export default function Cond14() {
  const [state, dispatch] = useReducer(cond14Reducer, InitialState);
  const [form, setForm] = useState(initialForm);

  const equilateralTriangle = () =>
    dispatch({ type: TYPES.EQUILATERAL_TRIANGLE });
  const isoscelesTriangle = () => dispatch({ type: TYPES.ISOSCELES_TRIANGLE });
  const scaleneTriangle = () => dispatch({ type: TYPES.SCALENE_TRIANGLE });

  const handleSubmit = (e) => {
    let s1 = form.side1;
    let s2 = form.side2;
    let s3 = form.side3;
    e.preventDefault();
    if (s1 === s2 && s2 === s3) {
      equilateralTriangle();
    }
    if (
      (s1 === s2 && s1 !== s3) ||
      (s2 === s3 && s2 !== s1) ||
      (s3 === s1 && s3 !== s2)
    ) {
      isoscelesTriangle();
    }
    if (s1 !== s2 && s2 !== s3 && s3 !== s1) {
      scaleneTriangle();
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="condFourteen-exercise">
      <h3>Exercise Four - Reducer</h3>
      <p>
        <i>
          Challenge: make a program that you be able to insert three sides of a
          triangle
        </i>
      </p>
      <ul>
        <li>
          If three sides have the same lenght display this message "Is
          equilateral triangle"
        </li>
        <li>
          If two sides have the same lenght and one side is diferent display
          this message "Is scalene triangle"
        </li>
        <li>
          If three sides have diferent lenght display this message "Is isosceles
          triangle"
        </li>
      </ul>

      <h4>Triangle with React reducer</h4>

      <form onSubmit={handleSubmit}>
        <label htmlFor="side1">First side (cm)</label>
        <br />
        <br />
        <input
          type="text"
          name="side1"
          required
          placeholder="Insert the first side of triangle"
          title="Only numbers"
          value={form.side1}
          pattern="^[0-9.\s-]+$"
          onChange={handleChange}
        />
        <br />
        <br />
        <label htmlFor="side2">Second side (cm)</label>
        <br />
        <br />
        <input
          type="text"
          name="side2"
          required
          placeholder="Insert the second side of triangle"
          title="Only numbers"
          value={form.side2}
          pattern="^[0-9.\s-]+$"
          onChange={handleChange}
        />
        <br />
        <br />
        <label htmlFor="side3">Third side (cm)</label>
        <br />
        <br />
        <input
          type="text"
          name="side3"
          required
          placeholder="Insert the third side of triangle"
          title="Only numbers"
          value={form.side3}
          pattern="^[0-9.\s-]+$"
          onChange={handleChange}
        />
        <br />
        <br />

        <input type="submit" value="Type of triangle"/>
      </form>
      {regExp.test(form.side1) && regExp.test(form.side2) && regExp.test(form.side3) ? (
        <Message msg={state.result} bg={"transparent"} />
      ) : (
        <Message msg={"Only numbers"} bg={"#df4235"} />
      )}
    </div>
  );
};
