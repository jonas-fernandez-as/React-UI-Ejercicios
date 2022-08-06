import { useEffect, useState } from "react";
import "./ExUseEffect01.css";

let major = null;

let numbers = [];

const initialForm = {
  num: "",
};

export default function ExUseEffect01() {
  const [disabled, setDisabled] = useState(false);
  const [form, setForm] = useState(initialForm);

  const handleSubmit = (e) => {
    e.preventDefault();

    numbers.push(parseInt(form.num));

    if (major === null) {
      major = parseInt(form.num);
    } else if (form.num > major) {
      major = parseInt(form.num);
    }
    if (numbers.length === 10) {
      document.getElementById("msg").innerText = `Major of 10 is : ${major}`;
    }

    e.target.reset();
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    numbers.length === 10 ? setDisabled(true) : setDisabled(false);

    console.log(numbers);
  }, [form]);

  return (
    <div className="condUse-effect01">
      <h3>Exercise One - useEffect</h3>
      <p>
        <i>
          Challenge: make a program that you be able to put ten numbers numbers
          and return the major of them:
        </i>
      </p>

      <h4>Major number with useEffect</h4>

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
