import { useFilter } from "../Contexts/Filters/FilterContext";

import "./Styles/Filters.css";

export default function Filters() {

    const { filteredNoteList, state, dispatch } = useFilter();

    return (
        <div className="filters flex-column">

            <div className="filters-header flex-center-sb">
                <p className="text-l bold">Filters</p>
                <button className="btn secondary-btn filter-clear-btn" onClick={() => dispatch({ type: "CLEAR" })}>Clear</button>
            </div>

            <div className="category-filter flex-column-j-c">

                <p className="category-header text-l bold">Priority</p>

                <div className="filterCategory">
                    <input type="radio" name="priority" id="low" checked={state.priority === "LOW"} onChange={() => dispatch({ type: "PRIORITY", payload: "LOW" })} />
                    <label htmlFor="low">Low</label>
                </div>

                <div className="filterCategory">
                    <input type="radio" name="priority" id="medium" checked={state.priority === "MEDIUM"} onChange={() => dispatch({ type: "PRIORITY", payload: "MEDIUM" })} />
                    <label htmlFor="medium">Medium</label>
                </div>

                <div className="filterCategory">
                    <input type="radio" name="priority" id="high" checked={state.priority === "HIGH"} onChange={() => dispatch({ type: "PRIORITY", payload: "HIGH" })} />
                    <label htmlFor="high">High</label>
                </div>

            </div>

            <div className="category-filter flex-column-j-c">

                <p className="category-header text-l bold">Label</p>

                <div className="filterCategory">
                    <input type="checkbox" name="label" id="Home"
                        value="Home" onChange={(e) => dispatch({ type: "LABEL", payload: e.target.value })}
                        checked={state.label.find((label) => label === "Home") ? true : false} />

                    <label htmlFor="Home">Home</label>
                </div>

                <div className="filterCategory">
                    <input type="checkbox" name="label" id="Exercise"
                        value="Exercise" onChange={(e) => dispatch({ type: "LABEL", payload: e.target.value })}
                        checked={state.label.find((label) => label === "Exercise") ? true : false} />

                    <label htmlFor="Exercise">Exercise</label>
                </div>

                <div className="filterCategory">
                    <input type="checkbox" name="label" id="Work"
                        value="Work" onChange={(e) => dispatch({ type: "LABEL", payload: e.target.value })}
                        checked={state.label.find((label) => label === "Work") ? true : false} />

                    <label htmlFor="Work">Work</label>
                </div>

                <div className="filterCategory">
                    <input type="checkbox" name="label" id="Personal"
                        value="Personal" onChange={(e) => dispatch({ type: "LABEL", payload: e.target.value })}
                        checked={state.label.find((label) => label === "Personal") ? true : false} />

                    <label htmlFor="Personal">Personal</label>
                </div>

                <div className="filterCategory">
                    <input type="checkbox" name="label" id="Chores"
                        value="Chores" onChange={(e) => dispatch({ type: "LABEL", payload: e.target.value })}
                        checked={state.label.find((label) => label === "Chores") ? true : false} />

                    <label htmlFor="Chores">Chores</label>
                </div>

            </div>


            <div className="sort-filter">

                <p className="category-header text-l bold">Sort by Date</p>

                <div className="filterCategory">
                    <input type="radio" name="date" id="oldest" checked={state.date === "OLDEST"}
                        onChange={() => dispatch({ type: "DATE", payload: "OLDEST" })} />
                    <label htmlFor="oldest">Oldest First</label>
                </div>

                <div className="filterCategory">

                    <input type="radio" name="date" id="newest" checked={state.date === "NEWEST"}
                        onChange={() => dispatch({ type: "DATE", payload: "NEWEST" })} />
                    <label htmlFor="newest">Newest First</label>

                </div>

            </div>

        </div>
    )
}

