import { useContext, createContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';

const NoteContext = createContext();

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

    const token = localStorage.getItem("Token");

    useEffect(() => {
        if (token) {
            setNoteDetail({...noteDetail, isLoggedIn:true});
        }
    }, [noteDetail.isLoggedIn]);


    return (
        <NoteContext.Provider value={{ noteDetail, setNoteDetail, note, setNote, noteDisplay, setNoteDisplay }}>{children}</NoteContext.Provider>
    )
}

export { useNote, NoteProvider };