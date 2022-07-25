import { useState } from "react";
import "./Age.css";
import Message from "./Message";

let initialState = {
  actual: " ",
  born: " ",
};

export default function Age() {
  const [form, setForm] = useState(initialState);
  const [age, setAge] = useState("");

  let regExp = /^[0-9\s]+$/;

  let calcAge = (act, brn) => {
    setAge(act - brn);
  };

  let handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    calcAge(form.actual, form.born);
  };
  return (
    <article>
      <div className="age-exercise">
        <h3>Exercise three</h3>
        <p>
          <i>
            Challenge: make a program that allows you to enter the current year
            and the year of the person's birth and calculate and displays their
            age <b>NOTE</b>: it is not necesary to take into acount if the
            person's had a birhday or not, just calculate.
          </i>
        </p>
        <h4>Calculate Age width React</h4>
        <form onSubmit={handleSubmit}>
          <label>Actual year</label>
          <br />
          <br />
          <input
            type={"text"}
            name="actual"
            placeholder="Insert actual year"
            value={form.actual}
            required
            pattern="^[0-9\s]+$"
            title="Insert a valid number"
            onChange={handleChange}
          />
          <br />
          <br />
          <label>Born year</label>
          <br />
          <br />
          <input
            type={"text"}
            name="born"
            value={form.born}
            placeholder="Insert born year"
            required
            pattern="^[0-9\s]+$"
            title="Insert a valid number"
            onChange={handleChange}
          />
          <br />
          <br />
          <input type="submit" value="Calculate" />
        </form>
        {regExp.test(form.actual) ? (
          ""
        ) : (
          <Message
            msg={`"${form.actual}" is NOT a valid number`}
            bg={"#df4235"}
          />
        )}
        {regExp.test(form.born) ? (
          <Message msg={age} bg="#fff" />
        ) : (
          <Message
            msg={`"${form.born}" is NOT a valid number`}
            bg={"#df4235"}
          />
        )}
      </div>
    </article>
  );
}
