import boy from "../assets/boy.svg";
import girl from "../assets/girl.svg";
import { MdDelete } from "react-icons/md";

function User({ item, deleteUser }) {
    return (
        <>
            <li style={{ borderStyle: "solid", borderColor: item.gender == "male" ? "green" : "pink" }}>
                <img src={item.gender == "male" ? boy : girl} width={50} height={50} />
                <p>{item.name}</p>
                <div><button onClick={() => deleteUser(item.id)}><MdDelete size={20}/></button></div>
            </li>
        </>
    );
}

export default User;