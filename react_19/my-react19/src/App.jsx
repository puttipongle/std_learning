import Header from "./components/Header";
import Personlist from "./components/Personlist";
import "./App.css";
import { useState, useEffect } from "react";
import Addform from "./components/Addform";

function App() {
  const [data, setData] = useState([
    { id: 1, name: "aun", gender: "male" },
    { id: 2, name: "num", gender: "female" },
    { id: 3, name: "fix", gender: "male" },
    { id: 4, name: "ploy", gender: "female" },
  ]);

  function deleteUser(id) {
    const result = data.filter((user) => user.id !== id); //array ใหม่
    setData(result);
  }
 const [theme, setTheme] = useState(localStorage.getItem("mode") || "light");

  useEffect(() => {
    //console.log("บันทึกการตั้งค่าโหมด");
    localStorage.setItem("mode",theme);
  }, [theme]);

  return (
    <div className={theme}>
      <div className="app">
        <Header title="My Application Personlists" theme={theme} setTheme={setTheme} />
        <main>
          <Addform data={data} setData={setData} />
          <Personlist data={data} deleteUser={deleteUser} />
        </main>
      </div>
    </div>
  )
}

export default App;

