import "./CondOne.css";
import { useState } from "react";
import Message from "./Message";

let initialState = {
  number: " ",
};

let regExp = /^[0-9.\s-]+$/;

const CondOne = () => {
  const [form, setForm] = useState(initialState);
  const [res, setRes] = useState("");
  const majorMinor = (num) => {
    if (num < 10) setRes(`Number "${num}" is minor than 10`);
    if (num > 10) setRes(`Number "${num}" is major than 10`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    majorMinor(form.number);
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div>
        <div className="condOne-exercise">
        <h3>Exercise one</h3>
        <p>
          <i>
            Challenge: make a program that you be able to put a number and will
            returns "major" if its greater than ten or "minor" if is less than
            ten{" "}
          </i>
        </p>
        <h4>Major and minor with React</h4>
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

export default CondOne;
