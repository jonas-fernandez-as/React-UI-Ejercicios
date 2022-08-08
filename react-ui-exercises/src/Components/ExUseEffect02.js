import { useEffect, useState } from "react";
import "./ExUseEffect02.css";

let count = 0;

let numbers = [];

const initialForm = {
  num: "",
};

export default function ExUseEffect02() {
  const [disabled, setDisabled] = useState(false);
  const [form, setForm] = useState(initialForm);

  const handleSubmit = (e) => {
    e.preventDefault();

    numbers.push(parseInt(form.num));

    if (Math.sign(form.num) === 1) {
      count+=1;
    } else  {}

    if (numbers.length === 20) {
      document.getElementById("msg").innerText = `The quantity of positive numbers are : ${count}`;
    }

    e.target.reset();
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    numbers.length === 20 ? setDisabled(true) : setDisabled(false);

    console.log(numbers);
  }, [form]);

  return (
    <div className="condUse-effect02">
      <h3>Exercise Two - useEffect</h3>
      <p>
        <i>
          Challenge: make a program that you be able to put twenty numbers
          and count how many positives there are, return a message with quantity of positive numbers.
        </i>
      </p>

      <h4>Count positive numbers with useEffect</h4>

      <form onSubmit={handleSubmit}>
        <label htmlFor="num">Insert number</label>
        <br />
        <br />
        <input
          name="num"
          id="form-nums"
          onChange={handleChange}
          disabled={disabled}
          required
          pattern="^[0-9.-]{1,10}"
          title="Please only numbers"
          placeholder="Only numbers"
        />
        <br />
        <br />
        <input type="submit" value="Insert number"></input>
      </form>
      <br />

      <h4 id="msg"></h4>
    </div>
  );
}
