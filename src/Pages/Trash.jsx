import { Header, Footer, Aside , DeletedNoteCard } from "../Components/index";
import {useNote} from "../Contexts/NoteContext";

export default function Trash() {

    const {noteDetail} = useNote();

    const {trashNotes} = noteDetail;

    return (
        <div className="flex-column stick-bottom">
            <Header />
            <div className="homepage-body">
                <div className="aside-menu">
                    <Aside />
                </div>

                <div className="main-body">

                  <h2>Trash Notes: </h2>

                  {(trashNotes.length !== 0) ? <div>
                        <div className="notes flex-sp-ev notes-list">
                            {trashNotes.map((note) =>
                                <DeletedNoteCard Note={note} />
                            )}
                        </div>

                    </div> : <p className="content-left text-l">No Notes in the trash.</p>}
                    
                </div>

            </div>

            <Footer />
        </div>
    )
}