import "./Addform.css";

function Addform(){
    return(
        <section className="container">
            <form action="">
                <label>ชื่อประชากร</label>
                <input type="text" />
                <select name="" id="">
                    <option value="">ชาย</option>
                    <option value="">หญิง</option>
                </select>
                <button type="submit" className="btn-save">บันทึก</button>
            </form>
        </section>
    );
}

export default Addform;