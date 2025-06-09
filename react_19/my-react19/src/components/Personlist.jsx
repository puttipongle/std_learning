import { useState } from "react";

function Personlist() {
    const [data, setData] = useState([
        { id: 1, name: "aun", gender: "male" },
        { id: 2, name: "num", gender: "female" },
        { id: 3, name: "fix", gender: "male" },
    ]);

    const [show, setShow] = useState(true);

    return (
        <>
            <h1>number {data.length}</h1>
            <button onClick={() => setShow(!show)}>{show ? "hidden" : "show"}</button>
            <ul>
                {show && data.map((item) => (
                    <li key={item.id}>{item.name} | {item.gender}</li>
                ))}
            </ul>
        </>
    )
}

export default Personlist;