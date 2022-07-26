import "./Styles/Header.css";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useNote } from "../Contexts/NoteContext";
import { useEffect } from "react";

export default function Header() {

    const { noteDetail, setNoteDetail } = useNote();

    const { isLoggedIn } = noteDetail;

    const navigate = useNavigate();

    const loggedOutState = {
        isLoggedIn: false,
        notes: [],
        pinnedNotes: [],
        trashNotes: [],
        archiveNotes: []
    }

    const logoutHandler = () => {
        localStorage.removeItem("Token");
        setNoteDetail(loggedOutState);
        navigate("/");
    }

    const token = localStorage.getItem("Token")

    useEffect(() => {
        if (token) {
            setNoteDetail({ ...noteDetail, isLoggedIn: true });
        }
    }, [noteDetail.isLoggedIn]);

    return (
        <>
            <nav>
                <div className="nav-am flex-center-sb">
                    <div className="notes-logo">
                        <Link className="logo" to="/"><h1 className="text-xl">PaperNote</h1>
                            <div className="logo-image"><img src="https://res.cloudinary.com/nakulsharma15/image/upload/v1649682727/Assets/res-console.cloudinary-removebg-preview_ylesq8.png" alt="papernote" /></div></Link>
                    </div>

                    <div style={{ color: "black" }} className="ecom-icon flex-align-center">

                        <div className="links text-m">

                            {isLoggedIn ? <div onClick={logoutHandler}>Logout</div> : <Link to="/login" style={{ color: "black" }} className="log-btn">Login</Link>}

                        </div>
                    </div>
                </div>

            </nav>

        </>
    )
}