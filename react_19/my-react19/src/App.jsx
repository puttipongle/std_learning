import { useState } from "react";

function App() {
  const name = "Aun";
  const [age, setAge] = useState(10)

  return (
    <>
      <h1>Learning React 19 by {name}</h1>
      <p>Age: {age}</p>
      <button onClick={() => setAge(age + 1)}>เพิ่มอายุ</button>
      <button onClick={() => setAge(age - 1)}>ลดอายุ</button>
      <button onClick={() => setAge(10)}>reset</button>
    </>
  )
}

export default App;

