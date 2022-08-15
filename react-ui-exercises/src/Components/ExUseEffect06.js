import { useEffect, useState } from "react";
import "./ExUseEffect06.css";
import { ExUseEffect06Form } from "./ExUseEffect06Form";


/*

let majors = [];
let total = null;
let average = null;

let nums = {
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

const initialImpar ={
  mImpar:0,
  iIndex:0
  
}

const initialPrimes ={
  prime1:"No primes",
  prime2:"No primes",
  prime3:"No primes",
  prime4:"No primes",
  prime5:"No primes",
  prime6:"No primes",
  prime7:"No primes",
  prime8:"No primes",
  prime9:"No primes",
  prime10:"No primes"
}

export default function ExUseEffect06() {
  const [maxImpar,setMaxImpar]= useState(initialImpar)
  const [form, setForm] = useState(initialForm);
  const [disabled, setDisabled] = useState(initialDisabled);
  const [primeIndex,setPrimeIndex]=useState(initialPrimes)

  
  

  const lastPrime = (n) => {};

  const isOrder = (n) => {};

  const evaluateNumbers = (obj) => {
    let array = Array.from(obj);

    array.forEach((element,index) => {
      
      let countImpar=0
      let aIndex =index
      
      element.forEach((element) => {
        const isImpar = (element) => {
          if(element%2!==0 && Math.sign(element)===-1){
            countImpar=countImpar+1
          }

          if(countImpar> maxImpar.mImpar){
          setMaxImpar(maxImpar.mImpar=countImpar)
          setMaxImpar(maxImpar.iIndex=aIndex)
        }
        };

        isImpar(element)

         

        isOrder(element);

        lastPrime(element);
      });
    });
  };

  useEffect(() => {
    if (
      nums.numbers1.length === 10 &&
      nums.numbers2.length === 10 &&
      nums.numbers3.length === 10 &&
      nums.numbers4.length === 10 &&
      nums.numbers5.length === 10 &&
      nums.numbers6.length === 10 &&
      nums.numbers7.length === 10 &&
      nums.numbers8.length === 10 &&
      nums.numbers9.length === 10 &&
      nums.numbers10.length === 10
    ) {
      evaluateNumbers(nums);
    }
    nums.numbers1.length === 10
      ? setDisabled((disabled.disabled1 = true))
      : setDisabled((disabled.disabled1 = false));
    nums.numbers2.length === 10
      ? setDisabled((disabled.disabled2 = true))
      : setDisabled((disabled.disabled2 = false));
    nums.numbers3.length === 10
      ? setDisabled((disabled.disabled3 = true))
      : setDisabled((disabled.disabled3 = false));
    nums.numbers4.length === 10
      ? setDisabled((disabled.disabled4 = true))
      : setDisabled((disabled.disabled4 = false));
    nums.numbers5.length === 10
      ? setDisabled((disabled.disabled5 = true))
      : setDisabled((disabled.disabled5 = false));
    nums.numbers6.length === 10
      ? setDisabled((disabled.disabled6 = true))
      : setDisabled((disabled.disabled6 = false));
    nums.numbers7.length === 10
      ? setDisabled((disabled.disabled7 = true))
      : setDisabled((disabled.disabled7 = false));
    nums.numbers8.length === 10
      ? setDisabled((disabled.disabled8 = true))
      : setDisabled((disabled.disabled8 = false));
    nums.numbers9.length === 10
      ? setDisabled((disabled.disabled9 = true))
      : setDisabled((disabled.disabled9 = false));
    nums.numbers10.length === 10
      ? setDisabled((disabled.disabled10 = true))
      : setDisabled((disabled.disabled10 = false));

    if (nums.numbers1.length === 10) {
      majors.map((el) => {
        return (average = average + parseInt(el));
      });
      total = average / majors.length;
      console.log(average);
      console.log(total);
      document.getElementById(
        "msg"
      ).innerText = `The age average of majors are: ${total.toFixed(
        0
      )} years old. And the quantity of majors are: ${majors.length} `;
    }
  }, [form]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    nums.numbers1.push(parseInt(form.num1));
    nums.numbers2.push(parseInt(form.num2));
    nums.numbers3.push(parseInt(form.num3));
    nums.numbers4.push(parseInt(form.num4));
    nums.numbers5.push(parseInt(form.num5));
    nums.numbers6.push(parseInt(form.num6));
    nums.numbers7.push(parseInt(form.num7));
    nums.numbers8.push(parseInt(form.num8));
    nums.numbers9.push(parseInt(form.num9));
    nums.numbers10.push(parseInt(form.num10));

    e.target.reset();
  };

  return (
    <div className="condUse-effect06">
      <h3>Exercise Six - useEffect</h3>
      <p>
        <i>
          Se dispone de una lista de 10 grupos de números enteros separados
          entre ellos por ceros. Se pide determinar e informar: a. El número de
          grupo con mayor porcentaje de números impares positivos respecto al
          total de números que forman el grupo. b. Para cada grupo, el último
          número primo y en qué orden apareció en ese grupo. Si en un grupo no
          hubiera números primos, informarlo con un cartel aclaratorio. c.
          Informar cuántos grupos están formados por todos números ordenados de
          mayor a menor.
        </i>
      </p>

      <h4>Group analisys</h4>

      <ExUseEffect06Form
        name="num1"
        text="1° Group"
        disabled={disabled.disabled1}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
      />
      <ExUseEffect06Form
        name="num2"
        text="2° Group"
        disabled={disabled.disabled2}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
      />
      <ExUseEffect06Form
        name="num3"
        text="3° Group"
        disabled={disabled.disabled3}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
      />
      <ExUseEffect06Form
        name="num4"
        text="4° Group"
        disabled={disabled.disabled4}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
      />
      <ExUseEffect06Form
        name="num5"
        text="5° Group"
        disabled={disabled.disabled5}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
      />
      <ExUseEffect06Form
        name="num6"
        text="6° Group"
        disabled={disabled.disabled6}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
      />
      <ExUseEffect06Form
        name="num7"
        text="7° Group"
        disabled={disabled.disabled7}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
      />
      <ExUseEffect06Form
        name="num8"
        text="8° Group"
        disabled={disabled.disabled8}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
      />
      <ExUseEffect06Form
        name="num9"
        text="9° Group"
        disabled={disabled.disabled9}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
      />
      <ExUseEffect06Form
        name="num10"
        text="10° Group"
        disabled={disabled.disabled10}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
      />

      <h4 id="msg"></h4>
    </div>
  );
}
*/

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

const initialPrimes = [
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  []
];

export default function ExUseEffect06() {
  const [form, setForm] = useState(initialForm);
  const [disabled, setDisabled] = useState(initialDisabled);
  const [maxImpar, setMaxImpar] = useState(null);
  const [maxIGroup, setMaxIGroup] = useState(null);
  const [primeNumbers, setPrimeNumbers] = useState(initialPrimes);
  const [orderGroup, setOrderGroup] = useState([]);

  useEffect(() => {
    if (formNumbers.numbers1.length === 10) {
      setDisabled({...disabled,disabled1: true});
      console.log(disabled.disabled1)
    }
    if (formNumbers.numbers2.length === 10) {
      setDisabled({...disabled,disabled2: true});
    }
    if (formNumbers.numbers3.length === 10) {
      setDisabled({...disabled,disabled3: true});
    }
    if (formNumbers.numbers4.length === 10) {
      setDisabled({...disabled,disabled4: true});
    }
    if (formNumbers.numbers5.length === 10) {
      setDisabled({...disabled,disabled5: true});
    }
    if (formNumbers.numbers6.length === 10) {
      setDisabled({...disabled,disabled6: true});
    }
    if (formNumbers.numbers7.length === 10) {
      setDisabled({...disabled,disabled7: true});
    }
    if (formNumbers.numbers8.length === 10) {
      setDisabled({...disabled,disabled8: true});
    }
    if (formNumbers.numbers9.length === 10) {
      setDisabled({...disabled,disabled9: true});
    }
    if (formNumbers.numbers10.length === 10) {
      setDisabled({...disabled,disabled10: true});
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
     <ul>
     <li>1° group ${
       primeNumbers.prime1 !== null ? primeNumbers.prime1 : `No primes`
     }</li>
     <li>2° group ${
       primeNumbers.prime2 !== null ? primeNumbers.prime2 : `No primes`
     }</li>
     <li>3° group ${
       primeNumbers.prime3 !== null ? primeNumbers.prime3 : `No primes`
     }</li>
     <li>4° group ${
       primeNumbers.prime4 !== null ? primeNumbers.prime4 : `No primes`
     }</li>
     <li>5° group ${
       primeNumbers.prime5 !== null ? primeNumbers.prime5 : `No primes`
     }</li>
     <li>6° group ${
       primeNumbers.prime6 !== null ? primeNumbers.prime6 : `No primes`
     }</li>
     <li>7° group ${
       primeNumbers.prime7 !== null ? primeNumbers.prime7 : `No primes`
     }</li>
     <li>8° group ${
       primeNumbers.prime8 !== null ? primeNumbers.prime8 : `No primes`
     }</li>
     <li>9° group ${
       primeNumbers.prime9 !== null ? primeNumbers.prime9 : `No primes`
     }</li>
     <li>10° group ${
       primeNumbers.prime10 !== null ? primeNumbers.prime10 : `No primes`
     }</li>
     </ul>`;
      document.getElementById("msg3").innerText = `${orderGroup}`;
    }
  }, [form]);

  let negativeImpar = (num, index) => {
    let count = 0;

    if (Math.sign(num) === -1 && num % 2 == 0) {
      if (maxImpar === null) {
        setMaxImpar(count);
        setMaxIGroup(index);
      }
      if (count > maxImpar) {
        setMaxImpar(count);
        setMaxIGroup(index);
      }
    }
  };

  let lastPrimeAndIndex = (array, i) => {
    
    console.log(primeNumbers)
    array.forEach((el, index) => {
      let coun = 0;
      for (let ind = 0; ind <= el; ind++) {
        if (el % ind === 0) {
          coun++;
        }
      }
      //console.log(primeNumbers[i-1])
      console.log(formNumbers.numbers1)
      
      if (coun === 2) {
        
        setPrimeNumbers(primeNumbers[i-1]=`Group °${i} Last prime ${el} and her index ${index}`);
      }
    });
    console.log(primeNumbers[i-1])
  };

  let orderedNumbers = (array, index) => {
    let flag = 0;
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] < array[+i]) {
        flag = 0;
      } else {
        flag = 1;
      }
    }
    if ((flag = 0)) {
      setOrderGroup(
        ...orderGroup,
        ...`The group ${index} is ordered from minor to major`
      );
    }
  };

  return (
    <div className="condUse-effect06">
      <h3>Exercise Six - useEffect</h3>
      <p>
        <i>
          Se dispone de una lista de 10 grupos de números enteros separados
          entre ellos por ceros. Se pide determinar e informar: a. El número de
          grupo con mayor porcentaje de números impares positivos respecto al
          total de números que forman el grupo. b. Para cada grupo, el último
          número primo y en qué orden apareció en ese grupo. Si en un grupo no
          hubiera números primos, informarlo con un cartel aclaratorio. c.
          Informar cuántos grupos están formados por todos números ordenados de
          mayor a menor.
        </i>
      </p>

      <h4>Group analisys</h4>

      <ExUseEffect06Form
        name="num1"
        text="1° Group"
        disabled={disabled.disabled1}
        handleSubmit={(e) => {
          let i = 1;
          e.preventDefault();
          e.target.reset();
          negativeImpar(form.num1, i);
          formNumbers.numbers1.push(form.num1);

          if (formNumbers.numbers1.length === 10) {
            lastPrimeAndIndex(formNumbers.numbers1, i);
            orderedNumbers(formNumbers.numbers1, i);
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
          negativeImpar(form.num2, i);
          formNumbers.numbers2.push(form.num2);

          if (formNumbers.numbers2.length === 10) {
            lastPrimeAndIndex(formNumbers.numbers2, i);
            orderedNumbers(formNumbers.numbers2, i);
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
          negativeImpar(form.num3, i);
          formNumbers.numbers3.push(form.num3);

          if (formNumbers.numbers3.length === 10) {
            lastPrimeAndIndex(formNumbers.numbers3, i);
            orderedNumbers(formNumbers.numbers3, i);
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
          negativeImpar(form.num4, i);
          formNumbers.numbers4.push(form.num4);
          if (formNumbers.numbers4.length === 10) {
            lastPrimeAndIndex(formNumbers.numbers4, i);
            orderedNumbers(formNumbers.numbers4, i);
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
          negativeImpar(form.num5, i);
          formNumbers.numbers5.push(form.num5);

          if (formNumbers.numbers5.length === 10) {
            lastPrimeAndIndex(formNumbers.numbers5, i);
            orderedNumbers(formNumbers.numbers5, i);
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
          negativeImpar(form.num6, i);
          formNumbers.numbers6.push(form.num6);

          if (formNumbers.numbers6.length === 10) {
            lastPrimeAndIndex(formNumbers.numbers6, i);
            orderedNumbers(formNumbers.numbers6, i);
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
          negativeImpar(form.num7, i);
          formNumbers.numbers7.push(form.num7);

          if (formNumbers.numbers7.length === 10) {
            lastPrimeAndIndex(formNumbers.numbers7, i);
            orderedNumbers(formNumbers.numbers7, i);
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
          negativeImpar(form.num8, i);
          formNumbers.numbers8.push(form.num8);

          if (formNumbers.numbers8.length === 10) {
            lastPrimeAndIndex(formNumbers.numbers8, i);
            orderedNumbers(formNumbers.numbers8, i);
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
          negativeImpar(form.num9, i);
          formNumbers.numbers9.push(form.num9);

          if (formNumbers.numbers9.length === 10) {
            lastPrimeAndIndex(formNumbers.numbers9, i);
            orderedNumbers(formNumbers.numbers9, i);
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
          negativeImpar(form.num10, i);
          formNumbers.numbers10.push(form.num10);

          if (formNumbers.numbers10.length === 10) {
            lastPrimeAndIndex(formNumbers.numbers10, i);
            orderedNumbers(formNumbers.numbers10, i);
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