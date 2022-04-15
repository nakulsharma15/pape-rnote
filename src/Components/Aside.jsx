import "./Styles/Aside.css";
import { NavLink } from "react-router-dom";
import {useNote} from "../Contexts/NoteContext";

export default function Aside() {

    const {noteDetail} = useNote();

    const {trashNotes , archiveNotes} = noteDetail;

    const getActiveStyle = ({ isActive }) => ({
        color: isActive ? "var(--blue-500)" : ""
      });

    return (
        <div>
            <aside>
                <div>
                    <NavLink style={getActiveStyle} to="/">
                        <div className="aside-item flex-align-center">
                        <span className="material-icons-outlined">lightbulb</span>
                        <span className="aside-item-text">Notes</span>
                        </div>
                    </NavLink>
                </div>
                <div>
                    <NavLink style={getActiveStyle} to="/archive">
                        <div className="aside-item flex-align-center">
                        <span className="material-icons-outlined">archive</span>
                        <span className="aside-item-text">Archive {archiveNotes.length === 0 ? null : <span className="text-m">({archiveNotes.length})</span>} </span>
                        </div>
                    </NavLink>
                </div>
                <div>
                    <NavLink style={getActiveStyle} to="/trash">
                        <div className="aside-item flex-align-center">
                        <span className="material-icons-outlined">delete</span>
                        <span className="aside-item-text">Trash {trashNotes.length === 0 ? null : <span className="text-m">({trashNotes.length})</span>}</span>
                        </div>
                    </NavLink>
                </div>
               
            </aside>
        </div>
    )
}