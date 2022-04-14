import { Header, Footer, Aside, NoteCard, NoteEditor, PinnedNoteCard } from "../Components/index";
import { useNote } from "../Contexts/NoteContext";
import { v4 as uuidv4 } from 'uuid';

export default function Home() {

    const { noteDetail } = useNote();

    const { notes, pinnedNotes } = noteDetail;

    const sample = {
        id: uuidv4(),
        title: "",
        note: "",
    }

    return (
        <div className="flex-column stick-bottom">
            <Header />
            <div className="homepage-body">
                <div className="aside-menu">
                    <Aside />
                </div>

                <div className="main-body">

                    <NoteEditor />

                    {(pinnedNotes.length !== 0) ? <div>
                        <h2>Pinned Notes: </h2>
                        <div className="notes flex-sp-ev notes-list">
                            {pinnedNotes.map((note) =>
                                <PinnedNoteCard Note={note} />
                            )}
                        </div>

                    </div> : null
                    }

                    {(notes.length !== 0) ?
                        <div>
                            <h2>Notes:</h2>
                            <div className="notes flex-sp-ev notes-list">
                                {notes.map((note) =>
                                    <NoteCard Note={note} />
                                )}
                            </div>

                        </div> : null
                    }

                </div>

            </div>

            <Footer />

        </div>)
}