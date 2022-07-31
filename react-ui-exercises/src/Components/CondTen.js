import "./CondTen.css";
import { useState } from "react";
import Message from "./Message";

let initialState = {
  number1: " ",
};

let regExp = /^[0-9.\s-]+$/;

const CondTen = () => {
  const [form, setForm] = useState(initialState);
  const [res, setRes] = useState("");
  const compare = (num1) => {
    let n1 = parseInt(num1);
    if (n1 <= 60 ) {
      setRes(`${n1} minutes equals to ${(n1/60).toFixed(2)} hours`);
    } 
    else{
      setRes(`${n1} minutes equals to ${(n1/60).toFixed(0)} hours ${n1%60} minutes `)
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    compare(form.number1);
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div>
      <div className="condTen-exercise">
        <h3>Exercise Ten</h3>
        <p>
          <i>
            Challenge: make a program that you be able to put a number expresed
            on minutes. If the value is major than 60 will return the value
            expresed on hours
          </i>
        </p>
        <h4>Minutes-Hours with React</h4>
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
          <input type="submit" value={"Compare numbers"} />
          <br />
          <br />
        </form>
        {regExp.test(form.number1) ? (
          <Message msg={res} bg={"transparent"} />
        ) : (
          <Message msg={"Only numbers"} bg={"#df4235"} />
        )}
      </div>
    </div>
  );
};

export default CondTen;
