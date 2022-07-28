import "./CalcSquaring.css";
import { useState } from "react";
import Message from "./Message";

let initialNumber = {
  squaring: 0,
};

export default function Squaring() {
  const [number, setNumber] = useState(initialNumber);
  const [total, setTotal] = useState(0);

  let regExp = /^[0-9]+$/;

  let calcSquaring = (num) => num * num;

  let handleChange = (e) => {
    setNumber({ ...number, [e.target.name]: e.target.value });
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    setTotal(calcSquaring(number.squaring));
  };

  return (
   <article className="calcSquaring-container">
    <div className="calcSquaring">
      <h3> Exercise two</h3>
      <h4>Squaring with react</h4>
      <p>
        <i>
          Chalenge: make a software where you put a value and return squaring
          value
        </i>
      </p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="squaring">Squaring</label>
        <br />
        <br />
        <input
          type="text"
          name="squaring"
          value={number.squaring}
          placeholder="Please put a number"
          onChange={handleChange}
          required
          pattern="^[0-9]+$"
          title="Only numbers are permitted"
        />
        <br />
        <br />
        <input type="submit" value="Calculate" />
      </form>
        {regExp.test(number.squaring) ? (
          <Message msg={`${total}`} bg="#fff" />
        ) : (
          <Message msg="Ony numbers are permitted" bg="#df4235" />
        )}
    </div>
    </article>
  );
}
