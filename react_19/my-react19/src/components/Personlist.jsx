import { useState } from "react";
import boy from "../assets/boy.svg";
import girl from "../assets/girl.svg";

function Personlist() {
    const [data, setData] = useState([
        { id: 1, name: "aun", gender: "male" },
        { id: 2, name: "num", gender: "female" },
        { id: 3, name: "fix", gender: "male" },
        { id: 4, name: "ploy", gender: "female" },
    ]);

    const [show, setShow] = useState(true);

    return (
        <>
            <h1>number {data.length}</h1>
            <button onClick={() => setShow(!show)}>{show ? "hidden" : "show"}</button>
            <ul>
                {show && data.map((item) => (
                    <li key={item.id}>
                        <img src={item.gender == "male" ? boy : girl} width={50} height={50} />
                        {item.name}</li>
                ))}
            </ul>
        </>
    )
}

export default Personlist;