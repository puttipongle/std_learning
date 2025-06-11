import "./Header.css";
import { HiSun } from "react-icons/hi";
import { FaMoon } from "react-icons/fa";

function Header(props){

    const theme = props.theme;
    const setTheme = props.setTheme;

    function toggleTheme(){
        if(theme==="light"){
            setTheme("dark");
        }else{
            setTheme("light");
        }
    }

    return (
        <nav>
        <h1>{props.title}</h1>
        <span onClick={toggleTheme}>
            {theme==="light" ? <HiSun size={30}/> : <FaMoon size={30}/>}
        </span>
        
        </nav>
    );
};

export default Header;