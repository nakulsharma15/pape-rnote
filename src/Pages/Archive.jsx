import { Header, Footer, Aside , ArchivedNoteCard } from "../Components/index";
import {useNote} from "../Contexts/NoteContext";

export default function Archive() {

    const {noteDetail} = useNote();

    const {archiveNotes} = noteDetail;

    return (
        <div className="flex-column stick-bottom">
            <Header />
            <div className="homepage-body">
                <div className="aside-menu">
                    <Aside />
                </div>

                <div className="main-body">

                  <h2>Archived Notes: </h2>

                  {(archiveNotes.length !== 0) ? <div>
                        <div className="notes flex-sp-ev notes-list">
                            {archiveNotes.map((note) =>
                                <ArchivedNoteCard Note={note} />
                            )}
                        </div>

                    </div> : <p className="content-left text-l">Nothing in the Archives yet!</p>}
                    
                </div>


            </div>

            <Footer />
        </div>
    )
}