import { useState } from "react";
import "./CalcWomenMen.css";
import Message from "./Message";

let regExp= /^[0-9.\s]+$/

let initialState = {
  women: " ",
  men: " ",
};

export default function CalcWomanMen() {
  const [form, setForm] = useState(initialState);
  const [percent, setPercent] = useState(0);

  let percents = (w, m) => {
    let total = parseInt(w) + parseInt(m);
    let wPercent = (parseInt(w) * 100) / total;
    let mPercent = (parseInt(m) * 100) / total;
    setPercent(
      `Total women: ${wPercent.toFixed(2)} Total men: ${mPercent.toFixed(2)}`
    );
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    percents(form.women, form.men);
  };

  let handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  return (
    <section>
      <div className="womanmen-exercise">
        <h3>Exercise nine</h3>
        <p>
          <i>
          Challenge: a university wants to know percents of women and men.
          Create a program where you can insert the number of women and men and
          calculate the percent of both genders.
          </i>
        </p>
        <h4>Calculate women and men</h4>

        <form onSubmit={handleSubmit}>
          <label htmlFor="women">Women</label>
          <br />
          <br />
          <input
            type="text"
            name="men"
            placeholder="Insert number of men"
            required
            title="Only numbers"
            pattern="^[0-9.\s]+$"
            value={form.men}
            onChange={handleChange}
          />
          <br />
          <br />
          <label htmlFor="men">Men</label>
          <br />
          <br />
          <input
            type="text"
            name="women"
            placeholder="Insert number of women"
            required
            title="Only numbers"
            pattern="^[0-9.\s]+$"
            value={form.women}
            onChange={handleChange}
          />
          <br />
          <br />
          <input type="submit" value="Calculate" />
        </form>
        {regExp.test(form.women)?<Message msg={percent} bg={"#fff"}/>:<Message msg={"Only numbers"} bg={"#df4235"}/>}
      </div>
    </section>
  );
}
