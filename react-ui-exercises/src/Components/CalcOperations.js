import { useState } from "react";

let initialState = {
  suma: "",
};
const CalcOperations = () => {
  const [toAdd, setToAdd] = useState(initialState);
  const [addition, setAddition] = useState(0);

 

  const handleChange = (e) => {
   let regExp=/^[0123456789?+]+$/  
   if(! regExp.test(e.target.value)){
     
    }

    setToAdd({
      ...toAdd,
      [e.target.name]: e.target.value,
    });
  };

  const operation = (number) => {
    //console.log(total)
    let total = 0;
    let numbers = number.split("+");
    numbers.map((el) => (total = parseInt(el) + total));
    setAddition(total);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    operation(toAdd.suma);
  };

  return (
    <div>
      <div className="adittion-exercise">
        <h2>Exercise one</h2>
        <h3>Addition with React</h3>
        <form onSubmit={handleSubmit}>
          <label htmlFor="suma">Addition</label>

          <br />
          <br />
          <input
            type={"text"}
            name={"suma"}
            placeholder={"Put numers separated with(+)"}
            onChange={handleChange}
            value={toAdd.suma}
            required
            title="Solo se permiten numeros y el simbolo (+)"
          />
          <br />
          <br />
          <input className="submit" type="submit" value={"Addition"} />

          <h4>{addition}</h4>
        </form>
      </div>
    </div>
  );
};

export default CalcOperations;
