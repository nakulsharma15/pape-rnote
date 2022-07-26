import { Header, Footer, Aside, NoteCard, NoteEditor, PinnedNoteCard, Filters } from "../Components/index";
import { useNote } from "../Contexts/NoteContext";
import { useFilter } from "../Contexts/Filters/FilterContext";
import toast from "react-hot-toast";

export default function Home() {

    const { noteDetail, noteDisplay, setNoteDisplay } = useNote();

    const { notes, pinnedNotes, isLoggedIn } = noteDetail;

    const { filteredNoteList, state, dispatch } = useFilter();


    const displayHandler = () => {
        setNoteDisplay(!(noteDisplay));
    }

    const toastHandler = () => {

            toast("You need to login to continue!",
            {
                icon: '⚠️',
            }
        )
    }


    return (
        <div className="flex-column stick-bottom">
            <Header />
            <div className="homepage-body">
                <div className="aside-menu">
                    <Aside />
                    <Filters />
                </div>

                <div className="main-body">

                    {isLoggedIn ? <button className="btn primary-btn" onClick={displayHandler} style={noteDisplay == false ? { display: "block" } : { display: "none" }}>Add Note + </button> :

                        <button className="btn primary-btn" onClick={toastHandler}>Add Note + </button>
                    }

                    <div style={noteDisplay === true ? { display: "block" } : { display: "none" }}>
                        <NoteEditor />
                    </div>

                    {(pinnedNotes.length !== 0) ? <div>
                        <h2>Pinned Notes: </h2>
                        <div className="notes flex-sp-ev notes-list">
                            {pinnedNotes.map((note) =>
                                <PinnedNoteCard Note={note} key={note._id} />
                            )}
                        </div>

                    </div> : null
                    }

                    {(filteredNoteList.length !== 0) ?
                        <div>
                            <h2>Notes:</h2>
                            <div className="notes flex-sp-ev notes-list">
                                {filteredNoteList.map((note) =>
                                    <NoteCard Note={note} key={note._id} />
                                )}
                            </div>

                        </div> : null}

                </div>

            </div>

            <Footer />

        </div>)
}