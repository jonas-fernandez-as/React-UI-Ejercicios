import { useState } from "react";
import "./CalcAll.css";
import Message from "./Message";

let regExp = /^[0-9.\s]+$/;

let initialState = {
  number1: " ",
  number2: " ",
};

export default function CalcAll() {
  const [form, setForm] = useState(initialState);
  const [addition, setAddition] = useState(" ");
  const [division, setDivision] = useState(" ");
  const [multiplication, setMultiplication] = useState(" ");
  const [substraction, setSubstraction] = useState(" ");

  let calcAddition = (n1, n2) => setAddition(parseInt(n1) + parseInt(n2));

  let calcSubstraction = (n1, n2) =>
    setSubstraction(parseInt(n1) - parseInt(n2));

  let calcMultiplication = (n1, n2) =>
    setMultiplication(parseInt(n1) * parseInt(n2));

  let calcDivision = (n1, n2) => (setDivision(parseInt(n1) / parseInt(n2)));

  let handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  let handleSubmit = (e) => {
    e.preventDefault();

    calcAddition(form.number1, form.number2);
    calcSubstraction(form.number1, form.number2);
    calcMultiplication(form.number1, form.number2);
    calcDivision(form.number1, form.number2);
  };

  return (
    <article>
      <div className="calcall-exercise">
        <h3>Exercise ten</h3>
        <p><i>
          Challenge: create a program that you be able to insert two numbers.
          The program returns the addition the substraction the division and the
          multiplication of both numbers
          </i>
        </p>
        <h4>Calculate operations</h4>
        <form onSubmit={handleSubmit}>
          <label htmlFor="number1" /> <br />
          <br />
          <input
            type="text"
            name="number1"
            placeholder="Insert number"
            title="Only numbers"
            required
            pattern="^[0-9.\s]+$"
            value={form.number1}
            onChange={handleChange}
          ></input>
          <br />
          <br />
          <label htmlFor="number2" />
          <br />
          <br />
          <input
            type="text"
            name="number2"
            placeholder="Insert number"
            title="Only numbers"
            required
            pattern="^[0-9.\s]+$"
            value={form.number2}
            onChange={handleChange}
          ></input>
          <br />
          <br />
          <input type="submit" value="Calculate"></input>
        </form>
        {regExp.test(form.number1) && regExp.test(form.number2) ? (
          <Message
            msg={`Substraction: ${substraction} Addition: ${addition} Multiplication: ${multiplication} Division: ${division}`}
            bg={"transparent"}
          />
        ) : (
          <Message msg={"Only numbers"} bg={"#df4235"} />
        )}
      </div>
    </article>
  );
}

//"#df4235"
