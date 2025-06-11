import "./Addform.css";
import { useState } from "react";

function Addform(props){
    const [name,setName] = useState("");
    const [gender,setGender] = useState("male");

    const {data,setData} = props;

    function saveData(e){
        e.preventDefault();
        const person={
            id:Math.floor(Math.random()*1000), //random id แก้ปัญหาไอดีซ้ำ
            name:name,
            gender:gender,
        }
        console.log(person);
        setData([...data,person]); //เลือกมาใช้งานก่อนแล้วนำข้อมูลล่าสุดต่อท้าย
        setName("");
        setGender("male");
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
                <button type="submit" className="btn-save" disabled={name.trim()===""}>บันทึก</button>
            </form>
        </section>
    );
}

export default Addform;