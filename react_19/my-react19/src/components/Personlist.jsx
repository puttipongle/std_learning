import { useState } from "react";
import "./Personlist.css"
import User from "./User"
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";

function Personlist({ data, deleteUser }) {

    const [show, setShow] = useState(true);
    const myStyle = {
        color: "blue",
        fontSize: "20px"
    }

    return (
        <div className="container">
            <div className="header">
                <h2 style={{ color: "red", fontSize: "30px" }}>จำนวนสมาชิก {data.length} คน</h2>
                <span onClick={() => setShow(!show)}>{show ? <FaRegEyeSlash size={30}/> : <FaRegEye size={30}/>}</span>
            </div>
            <ul>
                {show && data.map((item) => (
                    <User key={item.id} item={item} deleteUser={deleteUser} />
                ))}
            </ul>
        </div>
    )
}

export default Personlist;