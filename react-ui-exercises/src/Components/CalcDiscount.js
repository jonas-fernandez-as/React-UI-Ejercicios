import { useState } from "react";
import "./CalcDiscount.css";
import Message from "./Message";

let initialState = {
  total: " ",
};

export default function CalcDiscount() {
  const [form, setForm] = useState(initialState);
  const [discount, setDiscount] = useState("");

  let cDiscount = (num) => {
    let disc = num * 0.15;
    let totalAmount = num- disc 
    setDiscount(totalAmount);
  };

  let handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    cDiscount(form.total);
  };

  return (
    <article>
      <div className="discount-exercise">
        <h3>Exercise eight</h3>
        <p>
          <i>
          Challenge: make a program that calculate a discount of 15% from total
          of pays from delivery sell and shows total and discount on window
          </i>
        </p>
        <h4>Discount with React</h4>

        <form onSubmit={handleSubmit}>
          <label htmlFor="total">Total</label>
          <br />
          <br />
          <input
            type="text"
            name="total"
            placeholder="Insert total"
            required
            title="Only numbers"
            pattern="^[0-9.\s]+$"
            value={form.total}
            onChange={handleChange}
          />
          <br />
          <br />
          <input type="submit" value="Calculate" />
        </form>
        <h4>{discount}</h4>
      </div>
    </article>
  );
}
