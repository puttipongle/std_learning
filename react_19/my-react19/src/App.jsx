import Header from "./components/Header";
import Personlist from "./components/Personlist";
import "./App.css";
import { useState } from "react";
import Addform from "./components/Addform";

function App() {
  const [data, setData] = useState([
    { id: 1, name: "aun", gender: "male" },
    { id: 2, name: "num", gender: "female" },
    { id: 3, name: "fix", gender: "male" },
    { id: 4, name: "ploy", gender: "female" },
    { id: 5, name: "joy", gender: "female" },
    { id: 6, name: "joe", gender: "male" },
  ]);

  function deleteUser(id) {
    const result = data.filter((user) => user.id !== id); //array ใหม่
    setData(result);
  }

  return (
    <div className="app">
      <Header title="My Application" />
      <main>
        <Addform/>
        <Personlist data={data} deleteUser={deleteUser} />
      </main>
    </div>
  )
}

export default App;

