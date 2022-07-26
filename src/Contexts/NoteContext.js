import { useContext, createContext, useState } from "react";
const NoteContext = createContext();
import { v4 as uuidv4 } from 'uuid';

const useNote = () => useContext(NoteContext);

const NoteProvider = ({ children }) => {

    const sample = {
        id: uuidv4(),
        title: "",
        note: "",
        label: "Home",
        priority: "Low",
        color: "#ffffff",
        date: new Date().toLocaleString()
    }

    const [note, setNote] = useState(sample);

    const [noteDisplay, setNoteDisplay] = useState(false);

    const [noteDetail, setNoteDetail] = useState({
        isLoggedIn: false,
        notes: [],
        pinnedNotes: [],
        trashNotes: [],
        archiveNotes: []
    })
    return (
        <NoteContext.Provider value={{ noteDetail, setNoteDetail, note, setNote, noteDisplay, setNoteDisplay }}>{children}</NoteContext.Provider>
    )
}

export { useNote, NoteProvider };