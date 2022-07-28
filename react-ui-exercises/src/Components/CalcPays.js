import { useState } from "react";
import "./CalcPays.css";
import Message from "./Message";

let regExp = /^[0-9.\s]+$/;

let initialState = {
  sells: " ",
};

export default function CalcPays() {
  const [form, setForm] = useState(initialState);
  const [total, setTotal] = useState(0);

  let calcTotal = (num) => {
    setTotal(num * 0.05 + 15000);
  };

  let handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    calcTotal(form.sells);
  };

  return (
    <div className="pays-exercise">
      <h3>Exercise five</h3>
      <p>
        Challenge: calculate the payment to employes. Fixed salary $15000 and
        comition of 5% of mensual sells. Make a program that returns total
        salary on the window.
      </p>
      <h4>Calc pays with React</h4>
      <form onSubmit={handleSubmit}>
        <label htmlFor="sells">Sells</label><br/><br/>
        <input
          type="text"
          name="sells"
          placeholder="Insert total sells"
          value={form.sells}
          onChange={handleChange}
          required
          pattern="^[0-9.\s]+$"
        /><br/><br/>
        <input type="submit" value="Calculate"/>
      </form>
      {regExp.test(form.sells) ? (
        <Message msg={`Total salary: $ ${total}`} bg={"#fff"} />
      ) : (
        <Message msg={`${total} is NOT a number`} bg={"#df4235"} />
      )}
    </div>
  );
}
