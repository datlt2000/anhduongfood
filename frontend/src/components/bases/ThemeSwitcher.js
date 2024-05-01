import { useEffect, useState } from "react";
import { faMoon } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ThemeSwither = (props) => {
    const [theme, setTheme] = useState(props.theme);

    const switcher = () => {
        if (props.switch) {
            if (theme !== props.switch) {
                setTheme(props.switch);
                return ;
            }
            else {
                setTheme(props.theme);
            }
        }
    }

    useEffect(() => {
        document.body.setAttribute('data-theme', theme)
    }, [theme]);

    return (
        <div>
            <button onClick={switcher} className=" btn btn-lg px-0 mx-3 rounded-circle"><FontAwesomeIcon size="lg" icon={faMoon}></FontAwesomeIcon></button>
        </div>
    );
}

export default ThemeSwither;