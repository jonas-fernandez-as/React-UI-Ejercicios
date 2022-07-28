import Message from "./Message";
import { useState } from "react";
import "./CalcDistance.css";

let initialState = {
  kmh: " ",
  distance: " ",
};

let regExp = /^[0-9.\s]+$/;

export default function CalcDistance() {
  const [form, setForm] = useState(initialState);
  const [result, setResult] = useState(null);

  let calc = (kmh, dist) => {
    let days = Math.floor(dist / kmh / 24);
    let hours = Math.floor(((dist / kmh / 24) * 24) % 24);
    let minutes = (((dist / kmh) * 60) % 60).toFixed(0);
    setResult(`To arrive: ${days} days ${hours} h, ${minutes} min`);
  };
  let handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    console.log(result);
    calc(form.kmh, form.distance);
  };

  return (
    <article>
      <div className="distance-exercise">
        <h3>Exercise four</h3>
        <p>
          Challenge: make a program that allows you to put kilometers between
          two cities and calculate the speed promedium of a vehicule. Calculate
          and shows on the window the time to arrive from one site to another
          watching the entered data
        </p>
        <h4>Calculate kilometers with react</h4>

        <form onSubmit={handleSubmit}>
          <label htmlFor="kmh">Kilometers</label>
          <br />
          <br />
          <input
            type="text"
            name="kmh"
            value={form.kmh}
            placeholder="Insert KM/H"
            required
            pattern="^[0-9.\s]+$"
            title="Only numbers"
            onChange={handleChange}
          />
          <br />
          <br />
          <label htmlFor="distance">Distance</label>
          <br />
          <br />
          <input
            type="text"
            name="distance"
            value={form.distance}
            placeholder="Insert distance"
            required
            pattern="^[0-9.\s]+$"
            title="Ony numbers"
            onChange={handleChange}
          />
          <br />
          <br />
          <input type="submit" value="Calculate" />
        </form>
        {regExp.test(form.distance) && regExp.test(form.kmh) ? (
          <Message msg={result} bg={"#fff"} />
        ) : (
          <Message msg={`Only numbers permitted`} bg={"#df4235"} />
        )}
      </div>
    </article>
  );
}
