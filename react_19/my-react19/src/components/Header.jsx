import "./Header.css";

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
        <button onClick={toggleTheme}>สลับโหมด : {theme}</button>
        </nav>
    );
};

export default Header;