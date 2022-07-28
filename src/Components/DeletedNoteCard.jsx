import "./Styles/NoteCard.css";
import { useNote } from "../Contexts/NoteContext";
import { addNoteForPin } from "../Utils/NoteHandler";

export default function DeletedNoteCard({ Note }) {

    const { noteDetail, setNoteDetail } = useNote();

    const { notes, trashNotes } = noteDetail;

    const restoreHandler = (id) => {

        const findNote = trashNotes.find((note) => note.id === id);

        const updatedTrash = trashNotes.filter((note) => note.id !== id);

        setNoteDetail({ ...noteDetail, trashNotes: [...updatedTrash] });
        addNoteForPin(findNote, setNoteDetail);
    }

    const deleteHandler = (id) => {

        const updatedTrash = trashNotes.filter((note) => note.id !== id);

        setNoteDetail({ ...noteDetail, trashNotes: [...updatedTrash] });

    }

    return (
        <div className="note-card" style={{ backgroundColor: Note.color }}>
            <div className="note-card-body">
                <div className="note-title flex-sb-c">
                    <p className="note-title-text bold">{Note.title}</p>
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

                    <div className="note-footer-content">

                        <span className="material-icons-outlined note-icons note-footer-icons" onClick={() => restoreHandler(Note.id)}>restore</span>

                        <span className="material-icons-outlined note-icons note-footer-icons" onClick={() => deleteHandler(Note.id)}>delete_forever</span>

                    </div>

                </div>
            </div>

        </div>
    )
}