import "./CondFour.css";
import { useState } from "react";
import Message from "./Message";

let initialState = {
  number: " ",
};


let regExp = /^[0-9.\s-]+$/;

const CondFour = () => {
  const [form, setForm] = useState(initialState);
  const [res, setRes] = useState("");

  const posNegZero = (num) => {
    if (Math.sign(num)=== -1) setRes(`Number "${num}" is negative`);
    if (Math.sign(num)=== +1) setRes(`Number "${num}" is positive`);
    if (Math.sign(num)=== 0) setRes(`Number "${num}" is zero`);
      
    }
  

  const handleSubmit = (e) => {
    e.preventDefault();
    posNegZero(form.number);
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div>
      <div className="condFour-exercise">
        <h3>Exercise Four</h3>
        <p>
          <i>
            Challenge: make a program that you be able to put a number and will
            returns "Positive" if its positive , "Negative" if is negative or
            "Zero" if its equal zero{" "}
          </i>
        </p>
        <h4>Positive , negative o zero with React</h4>
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

export default CondFour;
