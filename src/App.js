import "./styles.css";
import { useState } from "react";

export default function App() {
  const [chicken, setChicken] = useState(0);
  const [cows, setCows] = useState(0);
  const [pigs, setPigs] = useState(0);
  const [totalLegs, setTotalLegs] = useState(0);

  const farmChallenge = (chicken, cows, pigs) => {
    let chickenLegs = chicken * 2;
    let cowsLegs = cows * 4;
    let pigsLegs = pigs * 4;

    setTotalLegs(chickenLegs + cowsLegs + pigsLegs);
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Farm Challenge Code</h2>
      <div>
        <label>Chicken</label>
        <input type="number" onChange={(e) => setChicken(e.target.value)} />
      </div>
      <div>
        <label>Cows</label>
        <input type="number" onChange={(e) => setCows(e.target.value)} />
      </div>
      <div>
        <label>Pigs</label>
        <input type="number" onChange={(e) => setPigs(e.target.value)} />
      </div>
      <button onClick={() => farmChallenge(chicken, cows, pigs)}>submit</button>
      <h5>{totalLegs}</h5>
    </div>
  );
}
