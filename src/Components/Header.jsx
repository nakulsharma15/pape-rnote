import "./Styles/Header.css";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";

export default function Header() {

    return (
        <>
            <nav>
                <div className="nav-am flex-center-sb">
                    <div className="notes-logo">
                        <Link className="logo" to="/"><h1 className="text-xl">PaperNote</h1>
                           <div className="logo-image"><img src="https://res.cloudinary.com/nakulsharma15/image/upload/v1649682727/Assets/res-console.cloudinary-removebg-preview_ylesq8.png" alt="papernote" /></div></Link>
                    </div>

                    <div className="search_bm">
                        <input className="text-m search-bar" placeholder="Search" type="search" />
                        <i className="search-icon fas fa-search"></i>
                    </div>

                    <div style={{ color: "black" }} className="ecom-icon flex-align-center">

                        <div className="links text-m">
                            <Link to="/login" style={{ color: "black" }} className="log-btn" onClick={() => toast.success("On Login Page")}>Login</Link>
                        </div>
                    </div>
                </div>

                <div className="search_am">
                    <input className="text-m search-bar" placeholder="Search" type="search" />
                    <i className="search-icon fas fa-search"></i>
                </div>

            </nav>

        </>
    )
}