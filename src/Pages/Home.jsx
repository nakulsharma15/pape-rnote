import { Header, Footer, Aside, NoteCard, NoteEditor, PinnedNoteCard, Filters } from "../Components/index";
import { useNote } from "../Contexts/NoteContext";
import { useFilter } from "../Contexts/Filters/FilterContext";

export default function Home() {

    const { noteDetail } = useNote();

    const { notes, pinnedNotes } = noteDetail;

    const { filteredNoteList, state, dispatch } = useFilter();


    return (
        <div className="flex-column stick-bottom">
            <Header />
            <div className="homepage-body">
                <div className="aside-menu">
                    <Aside />
                    <Filters />
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

                    {(filteredNoteList.length !== 0) ?
                        <div>
                            <h2>Notes:</h2>
                            <div className="notes flex-sp-ev notes-list">
                                {filteredNoteList.map((note) =>
                                    <NoteCard Note={note} />
                                )}
                            </div>

                        </div> : null}

                </div>

            </div>

            <Footer />

        </div>)
}