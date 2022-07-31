import "./CondThree.css";
import { useState } from "react";
import Message from "./Message";

let initialState = {
  number1: " ",
  number2: " ",
};

let regExp = /^[0-9.\s-]+$/;

const CondThree = () => {
  const [form, setForm] = useState(initialState);
  const [res, setRes] = useState("");
  const compare = (num1, num2) => {
    let n1 = parseInt(num1);
    let n2 = parseInt(num2);
    if (n1 < n2) {
      setRes(`Number "${n2}" is major"`);
    } else if (n1 > n2) {
      setRes(`Number "${n1}" is major"`);
    }
    if( n1===n2)setRes(`Numer "${n1}" and number "${n2}" are equals`)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    compare(form.number1, form.number2);
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div>
      <div className="condThree-exercise">
        <h3>Exercise Three</h3>
        <p>
          <i>
            Challenge: make a program that you be able to put two numbers and
            will returns a message telling wich number is major .If the numbers
            are the same , returns a message telling " they are equals{" "}
          </i>
        </p>
        <h4>Major or equal with React</h4>
        <form onSubmit={handleSubmit}>
          <label htmlFor="number1">Number one</label>
          <br />
          <br />
          <input
            type="text"
            name="number1"
            placeholder="Please insert a number"
            required
            pattern="^[0-9.\s-]+$"
            onChange={handleChange}
            value={form.number1}
          />
          <br />
          <br />
          <label htmlFor="number2">Number two</label>
          <br />
          <br />
          <input
            type="text"
            name="number2"
            placeholder="Please insert a number"
            required
            pattern="^[0-9.\s-]+$"
            onChange={handleChange}
            value={form.number2}
          />
          <br />
          <br />
          <input type="submit" value={"Compare numbers"} />
          <br />
          <br />
        </form>
        {regExp.test(form.number1) && regExp.test(form.number2) ? (
          <Message msg={res} bg={"transparent"} />
        ) : (
          <Message msg={"Only numbers"} bg={"#df4235"} />
        )}
      </div>
    </div>
  );
};

export default CondThree;
