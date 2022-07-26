import axios from "axios";
// import toast from "./toast";

const addNote = async (noteData, setNoteDetail) => {
    try{
    const res = await axios.post("/api/notes", {note: noteData}, {
        headers: {
          authorization: localStorage.getItem("Token"),
        },
      });
      if (res.status === 200 || res.status === 201) {
        const { notes } = res.data;
        setNoteDetail((prev) => ({ ...prev, notes: notes }))
      }
    } catch (err){
        console.log("Something bad happened", err);
       
    }  
}

const editNote = async (noteData, setNoteDetail) => {
  try{
    const res = await axios.post(`/api/notes/${noteData._id}`, {note: noteData}, {
        headers: {
          authorization: localStorage.getItem("Token"),
        },
      });
      if (res.status === 200 || res.status === 201) {
        const { notes } = res.data;
        console.log(notes);
        setNoteDetail((prev) => ({ ...prev, notes: notes }))
      }
    } catch (err){
        console.log("Something bad happened", err);
    } 
}

const deleteNote = async(noteData, setNoteDetail) => {
  try{
    const res = await axios.delete(`/api/notes/${noteData._id}`,{
        headers: {
          authorization: localStorage.getItem("Token"),
        },
      });
      if (res.status === 200 || res.status === 201) {
        const { notes } = res.data;
        setNoteDetail((prev) => ({...prev , trashNotes:[...prev.trashNotes , noteData] , notes: notes}));
        
      }
    } catch (err){
        console.log("Something bad happened", err);
        
    } 
}

// const archiveNote = async(noteData, dispatch) => {
//   try{
//     const res = await axios.post(`/api/notes/archives/${noteData._id}`,{note: noteData},{
//         headers: {
//           authorization: localStorage.getItem("authToken"),
//         },
//       });
//       if (res.status === 200 || res.status === 201) {
//         const { notes, archives } = res.data;
//         toast({ type: "success", message: "Note Archived" });
//         dispatch({type: "UPDATE_ARCHIVE", payload: archives})
//         dispatch({type: "UPDATE_NOTES", payload: notes})
//       }
//     } catch (err){
//         console.log("Something bad happened", err);
//         toast({ type: "error", message: "Couldn't complete request" });
//     } 
// }

// const unarchiveNote = async(noteData, dispatch) => {
//   console.log("I have a good boy", noteData)
//   try{
//     const res = await axios.post(`/api/archives/restore/${noteData._id}`, {}, {
//         headers: {
//           authorization: localStorage.getItem("authToken"),
//         },
//       });
//       if (res.status === 200 || res.status === 201) {
//         const { notes, archives } = res.data;
//         toast({ type: "success", message: "Note Unarchived" });
//         dispatch({type: "UPDATE_ARCHIVE", payload: archives})
//         dispatch({type: "UPDATE_NOTES", payload: notes})
//       }
//     } catch (err){
//         console.log("Something bad happened", err);
//         toast({ type: "error", message: "Couldn't complete request" });
//     } 
// }

export {
    addNote,
    editNote,
    deleteNote,
    // archiveNote,
    // unarchiveNote
}