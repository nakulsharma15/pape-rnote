import "./Styles/NoteCard.css";

import {useNote} from "../Contexts/NoteContext";

export default function NoteCard({ Note }) {

    const {noteDetail , setNoteDetail} = useNote();

    const {notes , pinnedNotes} = noteDetail;

    const unpinHandler = (id) => {
        const findNote = pinnedNotes.find((item) => item.id === id);

        const updatedList = pinnedNotes.filter((item) => item.id !== id);

        setNoteDetail({...noteDetail , notes:[...notes , findNote] , pinnedNotes:[...updatedList]});
    }


    return (
            <div className="note-card" style={{backgroundColor:Note.color , width: "15rem"}}>
            <div className="note-card-body">
                <div className="note-title flex-sb-c">
                    <p className="note-title-text bold">{Note.title}</p>
                    <span className="material-icons pinned-icon" onClick={() => unpinHandler(Note.id)}>push_pin</span>
                </div>
                <div className="note-text">
                    <p className="note-text-body">{Note.note}</p>
                </div>
                <div className="note-info flex-sb">
                    <p className="text-s note-label">{Note.label}</p>
                    <p className="text-s note-label">Priority: {Note.priority}</p>
                </div>
                
                <div className="note-footer flex-sb-c">
                    <p className="text-s"><span className="note-created-text">Created on: </span><span>{Note.date}</span></p>
                    
                </div>
            </div>

        </div>
    )
}