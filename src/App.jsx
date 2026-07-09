import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import "./App.css";


export function Abc(){
  console.log("React is library of javascript- used to build complex UI making dynamic interactive site");
  return <h1>
    React is library of javascript- used to build complex UI making dynamic interactive site
  </h1>
}

export let Message = () => {
  return "Hello World";
}

function App() {
  // const [count, setCount] = useState(1);


  return (
    <div>

        <div>
          <h1>NPM - Node Package Manager</h1>
          <p>
            NPM is a package manager which is required to be included in project to run the project
          </p>
        </div>
        <button
          type="button"
          className="counter"
          // onClick={() => setCount((count) => count + 2)}
        >
          Count is 1
        </button>

      <div>
        <h1>
          React is library of javascript
        </h1>

        <form action="">
          Name: <input type="text" /> <br /> <br />
          email: <input type="email" /> <br /> <br />
          Address: <input type="text" /> <br /> <br />
          Password: <input type="Password" /> <br /> <br />
          Gender: <br /> <br />
          <input type="checkbox" /> Male <input type="checkbox" /> female <input type="checkbox" /> others <br /> <br />
          <input type="submit" /> <br /> <br />
        </form>
      </div>
    </div>
  )
}

export default App;
