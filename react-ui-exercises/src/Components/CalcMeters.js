import "./CalcMeters.css";
import Message from "./Message";
import { useState } from "react";

let regExp = /^[0-9.\s]+$/;

let initialState = {
  total: " ",
  covered: " ",
};

export default function CalcMeters() {
  const [form, setFrom] = useState(initialState);
  const [percents, setPercents] = useState("");

  let calcPercent = (totalM, coveredM) => {
    let noCovered = totalM - coveredM;
    let coveredP = ((coveredM * 100) / totalM).toFixed(2);
    let noCoveredP = ((noCovered * 100) / totalM).toFixed(2);

    setPercents(`No covered: ${noCoveredP}% Covered: ${coveredP}%`);
  };

  let handleChange = (e) => {
    setFrom({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    calcPercent(form.total, form.covered);
  };

  return (
    <article>
      <div className="meters-exercise">
        <h3>Exercise seven</h3>
        <p><i>
          Challenge: make a program that abbles you to insert a total squared
          meters of an space and total covered squared meters. Finally show's on
          window not covered total percent and covered meters total percent
          </i>
        </p>
        <h4>Squared meters on React</h4>
        <form onSubmit={handleSubmit}>
          <label htmlFor="total">Total meters</label>
          <br />
          <br />
          <input
            type="text"
            name="total"
            placeholder="Insert total squared meters"
            required
            pattern="^[0-9.\s]+$"
            title="Only numbers"
            onChange={handleChange}
            value={form.total}
          />
          <br />
          <br />
          <label htmlFor="covered">Covered meters</label>
          <br />
          <br />
          <input
            type="text"
            name="covered"
            placeholder="Insert total covered squared meters"
            required
            pattern="^[0-9.\s]+$"
            title="Only numbers"
            onChange={handleChange}
            value={form.covered}
          />
          <br />
          <br />
          <input type={"submit"} value="Calculate"></input>
          {regExp.test(form.covered) && regExp.test(form.total) ? (
            <Message msg={percents} bg={"#fff"} />
          ) : (
            <Message msg={`Only numbers`} bg={"#df4235"} />
          )}
        </form>
      </div>
    </article>
  );
}
