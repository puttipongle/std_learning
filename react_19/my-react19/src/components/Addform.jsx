import "./Addform.css";
import { useState } from "react";

function Addform(){
    const [name,setName] = useState();
    const [gender,setGender] = useState("male");

    function saveData(e){
        e.preventDefault();
        const person={
            name:name,
            gender:gender,
        }
        console.log(person);
    }
    return(
        <section className="container">
            <form onSubmit={saveData}>
                <label>ชื่อประชากร</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
                <select value={gender} onChange={(e) => setGender(e.target.value)}>
                    <option value="male">ชาย</option>
                    <option value="female">หญิง</option>
                </select>
                <button type="submit" className="btn-save">บันทึก</button>
            </form>
        </section>
    );
}

export default Addform;