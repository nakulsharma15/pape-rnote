import { useState } from "react";
import { useNote } from "../Contexts/NoteContext";
import { v4 as uuidv4 } from 'uuid';
import "./Styles/NoteEditor.css";
import { addNote, editNote } from "../Utils/NoteHandler";

export default function NoteEditor() {


    const sample = {
        id: uuidv4(),
        title: "",
        note: "",
        label: "Home",
        priority: "Low",
        color: "#ffffff",
        date: new Date().toLocaleString()
    }

    const colors = ["#f87171", "#fdba74", "#fde047", "#86efac", "#7dd3fc", "#ffffff"]

    const { noteDetail, setNoteDetail, note, setNote, noteDisplay, setNoteDisplay } = useNote();

    const { notes } = noteDetail;

    const cancelHandler = () => {
        setNote(sample);
        setNoteDisplay(!(noteDisplay));
    }


    const titleHandler = (event) => {
        setNote((prev) => ({ ...prev, title: event.target.value }))
    }

    const noteHandler = (event) => {
        setNote((prev) => ({ ...prev, note: event.target.value }))
    }

    const labelHandler = (event) => {
        setNote((prev) => ({ ...prev, label: event.target.value }))
    }

    const priorityHandler = (event) => {
        setNote((prev) => ({ ...prev, priority: event.target.value }))
    }

    const colorHandler = (color) => {
        setNote((prev) => ({ ...prev, color: color }))
    }

    const submitHandler = (event) => {
        const findEdit = notes.find((item) =>
            item.id === note.id ? { ...item } : undefined
        );

        if (findEdit) {
            editNote(note, setNoteDetail);
        }
        else {
            addNote(note, setNoteDetail);
        }
        setNote(sample);
        setNoteDisplay(!(noteDisplay));
        event.preventDefault();
    }

    return (

        <div className="editor-box">

            <div>
                <form style={{ backgroundColor: note.color }} className="note-form flex-column" onSubmit={submitHandler}>
                    <div>
                        <div>
                            <label>Title: </label>
                            <input style={{ backgroundColor: note.color }} value={note.title} onChange={titleHandler} required />
                        </div>
                        <div>
                            <label>Note: </label>
                            <input style={{ backgroundColor: note.color }} value={note.note} onChange={noteHandler} required />
                        </div>

                    </div>

                    <div>
                        <label> Select label: </label>
                        <select value={note.label} onChange={labelHandler} style={{ backgroundColor: note.color }}>
                            <option value="Home"> Home
                            </option>
                            <option value="Work"> Work
                            </option>
                            <option value="Personal"> Personal
                            </option>
                            <option value="Exercise"> Exercise
                            </option>
                            <option value="Chores"> Chores
                            </option>
                        </select>

                        <label> Select Priority: </label>
                        <select value={note.priority} onChange={priorityHandler} style={{ backgroundColor: note.color }}>
                            <option value="Low"> Low
                            </option>
                            <option value="Medium"> Medium
                            </option>
                            <option value="High"> High
                            </option>
                        </select>
                    </div>

                    <div>
                        {colors.map((color) => <span style={{ color: color, cursor: "pointer" }} className="material-icons" onClick={() => colorHandler(color)} key={color}>circle</span>)}
                    </div>

                    <div>

                        <button className="btn primary-btn submit-btn" type="submit">
                            Add Note
                        </button>

                        <button className="btn secondary-btn cancel-btn" onClick={cancelHandler}>Cancel</button>
                    </div>

                </form>
            </div>


        </div>
    )
}