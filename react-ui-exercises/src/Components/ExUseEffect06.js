import { useEffect, useState } from "react";
import "./ExUseEffect06.css";
import { ExUseEffect06Form } from "./ExUseEffect06Form";

const formNumbers = {
  numbers1: [],
  numbers2: [],
  numbers3: [],
  numbers4: [],
  numbers5: [],
  numbers6: [],
  numbers7: [],
  numbers8: [],
  numbers9: [],
  numbers10: [],
};

const initialForm = {
  num1: "",
  num2: "",
  num3: "",
  num4: "",
  num5: "",
  num5: "",
  num7: "",
  num8: "",
  num9: "",
  num10: "",
};

const initialDisabled = {
  disabled1: false,
  disabled2: false,
  disabled3: false,
  disabled4: false,
  disabled5: false,
  disabled6: false,
  disabled7: false,
  disabled8: false,
  disabled9: false,
  disabled10: false,
};

const initialPrimes = {
  prime1: ["", "", "", "", "", "", "", "", "", ""],
};

const initialOrder = {
  order: ["", "", "", "", "", "", "", "", "", ""],
};

export default function ExUseEffect06() {
  const [form, setForm] = useState(initialForm);
  const [disabled, setDisabled] = useState(initialDisabled);
  const [maxImpar, setMaxImpar] = useState(null);
  const [maxIGroup, setMaxIGroup] = useState(null);
  const [primeNumbers, setPrimeNumbers] = useState(initialPrimes);
  const [orderGroup, setOrderGroup] = useState(initialOrder);

  useEffect(() => {
    if (formNumbers.numbers1.length === 10) {
      setDisabled({ ...disabled, disabled1: true });
      console.log(disabled.disabled1);
    }
    if (formNumbers.numbers2.length === 10) {
      setDisabled({ ...disabled, disabled2: true });
    }
    if (formNumbers.numbers3.length === 10) {
      setDisabled({ ...disabled, disabled3: true });
    }
    if (formNumbers.numbers4.length === 10) {
      setDisabled({ ...disabled, disabled4: true });
    }
    if (formNumbers.numbers5.length === 10) {
      setDisabled({ ...disabled, disabled5: true });
    }
    if (formNumbers.numbers6.length === 10) {
      setDisabled({ ...disabled, disabled6: true });
    }
    if (formNumbers.numbers7.length === 10) {
      setDisabled({ ...disabled, disabled7: true });
    }
    if (formNumbers.numbers8.length === 10) {
      setDisabled({ ...disabled, disabled8: true });
    }
    if (formNumbers.numbers9.length === 10) {
      setDisabled({ ...disabled, disabled9: true });
    }
    if (formNumbers.numbers10.length === 10) {
      setDisabled({ ...disabled, disabled10: true });
    }

    if (
      formNumbers.numbers1.length === 10 &&
      formNumbers.numbers2.length === 10 &&
      formNumbers.numbers3.length === 10 &&
      formNumbers.numbers4.length === 10 &&
      formNumbers.numbers5.length === 10 &&
      formNumbers.numbers6.length === 10 &&
      formNumbers.numbers7.length === 10 &&
      formNumbers.numbers8.length === 10 &&
      formNumbers.numbers9.length === 10 &&
      formNumbers.numbers10.length === 10
    ) {
      document.getElementById(
        "msg1"
      ).innerText = `The group with more quantity of impar numbers are the ${maxIGroup} and the quantity is ${maxImpar}`;
      document.getElementById("msg2").innerText = `
     
     ${primeNumbers.prime1[0] !== null ? primeNumbers.prime1[0] : `No primes`}

     ${primeNumbers.prime1[1] !== null ? primeNumbers.prime1[1] : `No primes`}

     ${primeNumbers.prime1[2] !== null ? primeNumbers.prime1[2] : `No primes`}

     ${primeNumbers.prime1[3] !== null ? primeNumbers.prime1[3] : `No primes`}

     ${primeNumbers.prime1[4] !== null ? primeNumbers.prime1[4] : `No primes`}

     ${primeNumbers.prime1[5] !== null ? primeNumbers.prime1[5] : `No primes`}

     ${primeNumbers.prime1[6] !== null ? primeNumbers.prime1[6] : `No primes`}

     ${primeNumbers.prime1[7] !== null ? primeNumbers.prime1[7] : `No primes`}

     ${primeNumbers.prime1[8] !== null ? primeNumbers.prime1[8] : `No primes`}

     ${primeNumbers.prime1[9] !== null ? primeNumbers.prime1[9] : `No primes`}
     `;
      document.getElementById("msg3").innerText = `
      ${orderGroup.order[0] !== "" ? orderGroup.order[0] : "Group 1° No order"}
      
      ${orderGroup.order[1] !== "" ? orderGroup.order[1] : "Group 2° No order"}

      ${orderGroup.order[2] !== "" ? orderGroup.order[2] : "Group 3° No order"}

      ${orderGroup.order[3] !== "" ? orderGroup.order[3] : "Group 4° No order"}

      ${orderGroup.order[4] !== "" ? orderGroup.order[4] : "Group 5° No order"}

      ${orderGroup.order[5] !== "" ? orderGroup.order[5] : "Group 6° No order"}

      ${orderGroup.order[6] !== "" ? orderGroup.order[6] : "Group 7° No order"}

      ${orderGroup.order[7] !== "" ? orderGroup.order[7] : "Group 8° No order"}

      ${orderGroup.order[8] !== "" ? orderGroup.order[8] : "Group 9° No order"}

      ${orderGroup.order[9] !== "" ? orderGroup.order[9] : "Group 10° No order"}
      `;
    }
  }, [form]);

  let negativeImpar = (array, index) => {
    let count = 0;
    array.forEach((el) => {
      let number = parseInt(el);

      if (Math.sign(number) === 1 && number % 2 !== 0) {
        count = count + 1;

        if (maxImpar === null) {
          setMaxImpar(count);
          setMaxIGroup(index);
        }

        if (count > maxImpar) {
          setMaxImpar(count);
          setMaxIGroup(index);
        }
      }
    });
  };

  let lastPrimeAndIndex = (array, i) => {
    array.forEach((el, index) => {
      let coun = 0;
      for (let ind = 0; ind <= el; ind++) {
        if (el % ind === 0) {
          coun++;
          //console.log(i)
          //console.log(primeNumbers.prime1)
          //console.log(primeNumbers.prime1[i-1])
        }
      }
      //console.log(primeNumbers[i-1])

      if (coun === 2) {
        setPrimeNumbers({
          ...primeNumbers,
          ...(primeNumbers.prime1[
            i - 1
          ] = `Group °${i} Last prime ${el} and her index ${index}`),
        });
      }
    });
    //console.log(formNumbers.numbers1)
    //console.log(primeNumbers.prime1[i-1])
    //console.log(i)
    //console.log(primeNumbers)
  };

  let orderedNumbers = (array, index) => {
    let flag = 0;
    for (let i = 0; i < array.length; i++) {
      if (array[i] !== array.length) {
        if (array[i] < array[i + 1]) {
          flag = 0;
          //console.log(array[i])
          //console.log(array[i+1])
        } else {
          flag++;
        }
      }
    }
    if (flag === 0) {
      setOrderGroup({
        ...orderGroup,
        ...(orderGroup.order[
          index - 1
        ] = `The group ${index} is ordered from minor to major`),
      });
    }

    //console.log(flag)
    //console.log(array)
    //console.log(flag)
    //console.log(orderGroup)
  };

  return (
    <div className="condUse-effect06">
      <h3>Exercise Six - useEffect</h3>
      <p>
        <i>
          Insert a list of 10 numbers on 10 diferent groups. Then you got to
          show
        </i>
      </p>
      <li>
        <ul>
          <i>a. The group with major avarage of negative impar numbers.</i>
        </ul>
        <ul>
          <i>
            b. For each group the last prime number and her index. if the group
            dont
            <ul>
              <i>c. Inform how many groups are setted by major to minor</i>
            </ul>
            have prime numbers inform on the display.{" "}
          </i>
        </ul>
      </li>

      <h4>Group analisys</h4>

      <ExUseEffect06Form
        name="num1"
        text="1° Group"
        disabled={disabled.disabled1}
        handleSubmit={(e) => {
          let i = 1;
          e.preventDefault();
          e.target.reset();
          formNumbers.numbers1.push(parseInt(form.num1));

          if (formNumbers.numbers1.length === 10) {
            lastPrimeAndIndex(formNumbers.numbers1, i);
            orderedNumbers(formNumbers.numbers1, i);
            negativeImpar(formNumbers.numbers1, i);
          }
        }}
        handleChange={(e) => {
          setForm({ ...form.num1, [e.target.name]: e.target.value });
        }}
      />
      <ExUseEffect06Form
        name="num2"
        text="2° Group"
        disabled={disabled.disabled2}
        handleSubmit={(e) => {
          let i = 2;
          e.preventDefault();
          e.target.reset();
          formNumbers.numbers2.push(parseInt(form.num2));

          if (formNumbers.numbers2.length === 10) {
            lastPrimeAndIndex(formNumbers.numbers2, i);
            orderedNumbers(formNumbers.numbers2, i);
            negativeImpar(formNumbers.numbers2, i);
          }
        }}
        handleChange={(e) => {
          setForm({ ...form.num2, [e.target.name]: e.target.value });
        }}
      />
      <ExUseEffect06Form
        name="num3"
        text="3° Group"
        disabled={disabled.disabled3}
        handleSubmit={(e) => {
          let i = 3;
          e.preventDefault();
          e.target.reset();
          formNumbers.numbers3.push(parseInt(form.num3));

          if (formNumbers.numbers3.length === 10) {
            lastPrimeAndIndex(formNumbers.numbers3, i);
            orderedNumbers(formNumbers.numbers3, i);
            negativeImpar(formNumbers.numbers3, i);
          }
        }}
        handleChange={(e) => {
          setForm({ ...form.num3, [e.target.name]: e.target.value });
        }}
      />
      <ExUseEffect06Form
        name="num4"
        text="4° Group"
        disabled={disabled.disabled4}
        handleSubmit={(e) => {
          let i = 4;
          e.preventDefault();
          e.target.reset();
          formNumbers.numbers4.push(parseInt(form.num4));
          if (formNumbers.numbers4.length === 10) {
            lastPrimeAndIndex(formNumbers.numbers4, i);
            orderedNumbers(formNumbers.numbers4, i);
            negativeImpar(formNumbers.numbers4, i);
          }
        }}
        handleChange={(e) => {
          setForm({ ...form.num4, [e.target.name]: e.target.value });
        }}
      />
      <ExUseEffect06Form
        name="num5"
        text="5° Group"
        disabled={disabled.disabled5}
        handleSubmit={(e) => {
          let i = 5;
          e.preventDefault();
          e.target.reset();
          formNumbers.numbers5.push(parseInt(form.num5));

          if (formNumbers.numbers5.length === 10) {
            lastPrimeAndIndex(formNumbers.numbers5, i);
            orderedNumbers(formNumbers.numbers5, i);
            negativeImpar(formNumbers.numbers5, i);
          }
        }}
        handleChange={(e) => {
          setForm({ ...form.num5, [e.target.name]: e.target.value });
        }}
      />
      <ExUseEffect06Form
        name="num6"
        text="6° Group"
        disabled={disabled.disabled6}
        handleSubmit={(e) => {
          let i = 6;
          e.preventDefault();
          e.target.reset();
          formNumbers.numbers6.push(parseInt(form.num6));

          if (formNumbers.numbers6.length === 10) {
            lastPrimeAndIndex(formNumbers.numbers6, i);
            orderedNumbers(formNumbers.numbers6, i);
            negativeImpar(formNumbers.numbers6, i);
          }
        }}
        handleChange={(e) => {
          setForm({ ...form.num6, [e.target.name]: e.target.value });
        }}
      />
      <ExUseEffect06Form
        name="num7"
        text="7° Group"
        disabled={disabled.disabled7}
        handleSubmit={(e) => {
          let i = 7;
          e.preventDefault();
          e.target.reset();
          formNumbers.numbers7.push(parseInt(form.num7));

          if (formNumbers.numbers7.length === 10) {
            lastPrimeAndIndex(formNumbers.numbers7, i);
            orderedNumbers(formNumbers.numbers7, i);
            negativeImpar(formNumbers.numbers7, i);
          }
        }}
        handleChange={(e) => {
          setForm({ ...form.num7, [e.target.name]: e.target.value });
        }}
      />
      <ExUseEffect06Form
        name="num8"
        text="8° Group"
        disabled={disabled.disabled8}
        handleSubmit={(e) => {
          let i = 8;
          e.preventDefault();
          e.target.reset();
          formNumbers.numbers8.push(parseInt(form.num8));

          if (formNumbers.numbers8.length === 10) {
            lastPrimeAndIndex(formNumbers.numbers8, i);
            orderedNumbers(formNumbers.numbers8, i);
            negativeImpar(formNumbers.numbers8, i);
          }
        }}
        handleChange={(e) => {
          setForm({ ...form.num8, [e.target.name]: e.target.value });
        }}
      />
      <ExUseEffect06Form
        name="num9"
        text="9° Group"
        disabled={disabled.disabled9}
        handleSubmit={(e) => {
          let i = 9;
          e.preventDefault();
          e.target.reset();
          formNumbers.numbers9.push(parseInt(form.num9));

          if (formNumbers.numbers9.length === 10) {
            lastPrimeAndIndex(formNumbers.numbers9, i);
            orderedNumbers(formNumbers.numbers9, i);
            negativeImpar(formNumbers.numbers9, i);
          }
        }}
        handleChange={(e) => {
          setForm({ ...form.num9, [e.target.name]: e.target.value });
        }}
      />
      <ExUseEffect06Form
        name="num10"
        text="10° Group"
        disabled={disabled.disabled10}
        handleSubmit={(e) => {
          let i = 10;
          e.preventDefault();
          e.target.reset();
          formNumbers.numbers10.push(parseInt(form.num10));

          if (formNumbers.numbers10.length === 10) {
            lastPrimeAndIndex(formNumbers.numbers10, i);
            orderedNumbers(formNumbers.numbers10, i);
            negativeImpar(formNumbers.numbers10, i);
          }
        }}
        handleChange={(e) => {
          setForm({ ...form.num10, [e.target.name]: e.target.value });
        }}
      />

      <h4 id="msg1"></h4>
      <h4 id="msg2"></h4>
      <h4 id="msg3"></h4>
    </div>
  );
}
