import "./CondFive.css";
import { useState } from "react";
import Message from "./Message";

let initialState = {
  number: " ",
};

let regExp = /^[0-9.\s-]+$/;

const CondFive = () => {
  const [form, setForm] = useState(initialState);
  const [res, setRes] = useState("");

  const pair = (num) => {
    if (num % 2 === 0) setRes(`Number "${num}" is pair`);
    else setRes(`Number "${num}" is not pair`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    pair(form.number);
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div>
      <div className="condFive-exercise">
        <h3>Exercise Five</h3>
        <p>
          <i>
            <b>Challenge:</b> make a program that you be able to put a number
            and will returns
          </i>
        </p>
        <ul>
          <li><b>"Positive"</b> if its positive ,</li>
          <li><b>"Negative"</b> if its negative</li>
          <li><b>"Zero"</b> if its equal zero</li>
        </ul>
        <h4>Pair - odd with React</h4>
        <form onSubmit={handleSubmit}>
          <label htmlFor="number">Number</label>
          <br />
          <br />
          <input
            type="text"
            name="number"
            placeholder="Please insert a number"
            required
            pattern="^[0-9.\s-]+$"
            onChange={handleChange}
            value={form.number}
          />
          <br />
          <br />
          <input type="submit" value={"Check number"} />
          <br />
          <br />
        </form>
        {regExp.test(form.number) ? (
          <Message msg={res} bg={"transparent"} />
        ) : (
          <Message msg={"Only numbers"} bg={"#df4235"} />
        )}
      </div>
    </div>
  );
};

export default CondFive;
