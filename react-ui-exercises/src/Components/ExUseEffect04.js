import { useEffect, useState } from "react";
import "./ExUseEffect04.css";

let major = null;
let numbers = [];
let primes = [];

const initialForm = {
  num: "",
};

export default function ExUseEffect04() {
  const [form, setForm] = useState(initialForm);
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    primes.length === 0
      ? (document.getElementById("msg").innerText = `No prime numbers`)
      : (document.getElementById(
          "msg"
        ).innerText = `The major of prime numbers is ${major} and the index is ${result} `);
    numbers.length === 10 ? setDisabled(true) : setDisabled(false);
  }, [form]);

  const isPrime = (n) => {
    let count = 0;

    for (let i = 1; i <= n; i++) {
      if (n % i === 0) {
        count = count + 1;
      }
      //console.log(i)
    }

    if (count === 2) {
      primes.push(n);
      if (major === null) {
        major = n;
      } else if (n > major) {
        major = n;
      }
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    isPrime(parseInt(form.num));
    numbers.push(parseInt(form.num));
    e.target.reset();
  };

  let orden= numbers.map((el, index) => {
    return el === major ? (index+1) : ("");
  });
  
 let result=orden.filter((item)=>{
  return item !== "";
 })

 //console.log(result)

  //console.log(numbers)
  return (
    <div className="condUse-effect04">
      <h3>Exercise Three - useEffect</h3>
      <p>
        <i>
          Challenge: make a program that able you to put ten numbers and
           return : a message with the major of prime numbers and her index  .
        </i>
      </p>

      <h4>Count positive numbers with useEffect</h4>

      <form onSubmit={handleSubmit}>
        <label htmlFor="num">Insert number</label>
        <br />
        <input
          type="text"
          name="num"
          title="Only numbers"
          pattern="^[0-9.-]+$"
          required
          onChange={handleChange}
          disabled={disabled}
        />
        <br />
        <input type="submit" value="Send number" />
      </form>

      <h4 id="msg"></h4>
    </div>
  );
}
