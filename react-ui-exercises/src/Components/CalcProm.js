import { useState } from "react";
import "./CalcProm.css";
import Message from "./Message";

let regExp = /^[0-9\s]+$/;

let initialForm = {
  note1: "",
  note2: "",
  note3: "",
};

export default function CalcProm() {
  const [form, setForm] = useState(initialForm);
  const [prom, setProm] = useState("");

  let calc = (n1, n2, n3) => {
    setProm(((parseInt(n1) + parseInt(n2) + parseInt(n3)) / 3).toFixed(1));
  };

  let handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    calc(form.note1, form.note2, form.note3);
  };

  return (
    <article>
      <div className="prom-exercise">
        <h3>Exercise six</h3>
        <p>
          <i>
          Challenge: make a program that returns the promedius of three
          califications
          </i>
        </p>
        <h4>Calification promedius</h4>
        <form onSubmit={handleSubmit}>
          <label htmlFor="note1" />

          <br />
          <br />
          <input
            type="text"
            name="note1"
            placeholder="Insert calification"
            title="Only numbers"
            value={form.note1}
            onChange={handleChange}
          />

          <br />
          <br />
          <label htmlFor="note2" />

          <br />
          <br />
          <input
            type="text"
            name="note2"
            placeholder="Insert calification"
            title="Only numbers"
            value={form.note2}
            onChange={handleChange}
          />

          <br />
          <br />
          <label htmlFor="note3" />

          <br />
          <br />
          <input
            type="text"
            name="note3"
            placeholder="Insert calification"
            title="Only numbers"
            value={form.note3}
            onChange={handleChange}
          />
          <br />
          <br />
          <input type="submit" value="Calculate" />
        </form>
        {regExp.test(form.note1) &&
        regExp.test(form.note2) &&
        regExp.test(form.note3) ? (
          <Message msg={prom} />
        ) : (
          <Message />
        )}
      </div>
    </article>
  );
}
