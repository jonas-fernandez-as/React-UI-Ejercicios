import "./CondSeven.css";
import { useState } from "react";
import Message from "./Message";

let initialState = {
  number1: " ",
  number2: " ",
  number3: " ",
  number4: " ",
};

let regExp = /^[0-9.\s-]+$/;

const CondSeven = () => {
  const [form, setForm] = useState(initialState);
  const [res, setRes] = useState("");

  const major = (num1, num2, num3, num4) => {
    let n1 = parseInt(num1);
    let n2 = parseInt(num2);
    let n3 = parseInt(num3);
    let n4 = parseInt(num4);
    if (n1 > n2 && n1 > n3 && n1 > n4) setRes(`Major: "${n1}"`);
    if (n2 > n1 && n2 > n3 && n2 > n4) setRes(`Major: "${n2}"`);
    if (n3 > n2 && n3 > n1 && n3 > n4) setRes(`Major: "${n3}"`);
    if (n4 > n1 && n4 > n3 && n4 > n2) setRes(`Major: "${n4}"`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    major(form.number1, form.number2, form.number3, form.number4);
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div>
      <div className="condSix-exercise">
        <h3>Exercise Seven</h3>
        <p>
          <i>
            <b>Challenge:</b> make a program that you be able to put four
            numbers and after return the major number of them
          </i>
        </p>

        <h4>Major of four on React</h4>
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
          <label htmlFor="number3">Number three</label>
          <br />
          <br />
          <input
            type="text"
            name="number3"
            placeholder="Please insert a number"
            required
            pattern="^[0-9.\s-]+$"
            onChange={handleChange}
            value={form.number3}
          />
          <br />
          <br />
          <label htmlFor="number4">Number four</label>
          <br />
          <br />
          <input
            type="text"
            name="number4"
            placeholder="Please insert a number"
            required
            pattern="^[0-9.\s-]+$"
            onChange={handleChange}
            value={form.number4}
          />
          <br />
          <br />
          <input type="submit" value={"Check number"} />
        </form>
        {regExp.test(form.number1) &&
        regExp.test(form.number2) &&
        regExp.test(form.number3) &&
        regExp.test(form.number4) ? (
          <Message msg={res} bg={"transparent"} />
        ) : (
          <Message msg={"Only numbers"} bg={"#df4235"} />
        )}
      </div>
    </div>
  );
};

export default CondSeven;
