import { Navbar } from "../header/navbar";
import "./styles.css";
export const LayoutComponents = (props) => {
    return (
        <div className="container">
            <Navbar/>
            <div className="container-login">
                <div className="wrap-login">
                    {props.children}
                </div>
            </div>
        </div>
    )
}