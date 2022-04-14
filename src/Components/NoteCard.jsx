import "./Styles/NoteCard.css";

import {useNote} from "../Contexts/NoteContext"

export default function NoteCard({ Note }) {

    const {noteDetail , setNoteDetail , setNote} = useNote();

    const {notes , pinnedNotes} = noteDetail;

    const editHandler = (id) => {

        const findNote = notes.find((item) => item.id === id);

        setNote((prev) => ({...prev, title: findNote.title , note: findNote.note , id: findNote.id}))
    }

    const pinHandler = (id) => {
        const findNote = notes.find((item) => item.id === id);

        const updatedNotes = notes.filter((item) => item.id !== id);
        
        setNoteDetail({...noteDetail , notes:[...updatedNotes] , pinnedNotes:[...pinnedNotes , findNote]})
    }

    return (
            <div className="note-card" style={{backgroundColor:Note.color}}>
            <div className="note-card-body">
                <div className="note-title flex-sb-c">
                    <p className="note-title-text bold">{Note.title}</p>
                    <span className="material-icons-outlined note-icons note-pin-icon" onClick={() => pinHandler(Note.id)}>push_pin</span>
                </div>
                <div className="note-text">
                    <p className="note-text-body">{Note.note}</p>
                </div>
                <div className="note-info flex-sb">
                    <p className="text-s note-label">{Note.label}</p>
                    <p className="text-s note-label">Priority: {Note.priority}</p>
                </div>
                
                <div className="note-footer flex-sb-c">
                    <p className="text-s"><span className="note-created-text">Created on: </span><span>14/04/2022</span></p>
                    <div className="note-footer-content">

                        <span className="material-icons-outlined note-icons note-footer-icons" onClick={() => editHandler(Note.id)}>edit</span>

                        <span className="material-icons-outlined note-icons note-footer-icons">archive</span>

                        <span className="material-icons-outlined note-icons note-footer-icons">delete</span>
                    </div>

                </div>
            </div>

        </div>
    )
}