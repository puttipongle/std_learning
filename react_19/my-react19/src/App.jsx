import { useState } from "react";

function App() {
  const [data, setData] = useState([
    { id: 1, name: "aun", gender: "male" },
    { id: 2, name: "num", gender: "female" },
    { id: 3, name: "fix", gender: "male" },
  ]);

  return (
    <>
      <h1>number {data.length}</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.name} | {item.gender}</li>
        ))}
      </ul>
    </>
  )
}

export default App;

