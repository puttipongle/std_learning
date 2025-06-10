import { useState } from "react";
import boy from "../assets/boy.svg";
import girl from "../assets/girl.svg";
import "./Personlist.css"


function Personlist() {
    const [data, setData] = useState([
        { id: 1, name: "aun", gender: "male" },
        { id: 2, name: "num", gender: "female" },
        { id: 3, name: "fix", gender: "male" },
        { id: 4, name: "ploy", gender: "female" },
    ]);

    const [show, setShow] = useState(true);
    const myStyle = {
        color: "blue",
        fontSize: "20px"
    }

    return (
        <div className="container">
            <div className="header">
                <h2 style={{ color: "red", fontSize: "30px" }}>จำนวนสมาชิก {data.length} คน</h2>
                <button onClick={() => setShow(!show)}>{show ? "hidden" : "show"}</button>
            </div>
            <ul>
                {show && data.map((item) => (
                    <li key={item.id} style={{borderStyle:"solid",borderColor:item.gender == "male" ? "green" : "pink"}}>
                        <img src={item.gender == "male" ? boy : girl} width={50} height={50} />
                        <p>{item.name}</p>
                        <div className="control"><button>ลบ</button></div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Personlist;