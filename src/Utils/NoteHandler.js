import axios from "axios";
import toast from "react-hot-toast";

const addNote = async (noteData, setNoteDetail) => {
    try {
        const res = await axios.post("/api/notes", { note: noteData }, {
            headers: {
                authorization: localStorage.getItem("Token"),
            },
        });
        if (res.status === 200 || res.status === 201) {
            const { notes } = res.data;
            setNoteDetail((prev) => ({ ...prev, notes: notes }));
            toast.success("Note added successfully");
        }
    } catch (err) {
        console.log("Error: ", err);

    }
}

const editNote = async (noteData, setNoteDetail) => {
    try {
        const res = await axios.post(`/api/notes/${noteData._id}`, { note: noteData }, {
            headers: {
                authorization: localStorage.getItem("Token"),
            },
        });
        if (res.status === 200 || res.status === 201) {
            const { notes } = res.data;
            setNoteDetail((prev) => ({ ...prev, notes: notes }));
            toast.success("Note updated");
        }
    } catch (err) {
        console.log("Error: ", err);
    }
}

const deleteNote = async (noteData, setNoteDetail) => {
    try {
        const res = await axios.delete(`/api/notes/${noteData._id}`, {
            headers: {
                authorization: localStorage.getItem("Token"),
            },
        });
        if (res.status === 200 || res.status === 201) {
            const { notes } = res.data;
            setNoteDetail((prev) => ({ ...prev, trashNotes: [...prev.trashNotes, noteData], notes: notes }));
            toast.success("Note deleted successfully");

        }
    } catch (err) {
        console.log("Error: ", err);

    }
}

const archiveNote = async (noteData, setNoteDetail) => {
    try {
        const res = await axios.post(`/api/notes/archives/${noteData._id}`, { note: noteData }, {
            headers: {
                authorization: localStorage.getItem("Token"),
            },
        });
        if (res.status === 200 || res.status === 201) {
            const { notes, archives } = res.data;
            setNoteDetail((prev) => ({ ...prev, archiveNotes: archives, notes: notes }));
            toast.success("Note archived");
        }
    } catch (err) {
        console.log("Error: ", err);

    }
}

const unarchiveNote = async (noteData, setNoteDetail) => {
    try {
        const res = await axios.post(`/api/archives/restore/${noteData._id}`, {}, {
            headers: {
                authorization: localStorage.getItem("Token"),
            },
        });
        if (res.status === 200 || res.status === 201) {
            const { notes, archives } = res.data;
            setNoteDetail((prev) => ({ ...prev, archiveNotes: archives, notes: notes }));
            toast.success("Note moved to home");
        }
    } catch (err) {
        console.log("Error: ", err);
    }
}

export {
    addNote,
    editNote,
    deleteNote,
    archiveNote,
    unarchiveNote
}