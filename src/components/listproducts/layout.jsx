import { Footer } from "../footer";
import { Navbar } from "../header/navbar";
import { Recommended } from "./recommended";
import { Sidebar } from "./sidebar";

export const Layout = (props) => {
    return (
        <div className="container">
            <Navbar/>
            <Sidebar/>
            <Recommended/>
            <div className="container-products">
                <div className="wrap-products">
                    {props.children}
                </div>
            </div>
            <Footer/>
        </div>
    )
}