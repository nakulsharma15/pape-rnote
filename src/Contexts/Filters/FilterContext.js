import { useContext, createContext, useReducer, useEffect, useState } from "react";

import { useNote } from "../NoteContext";

import { filterReducer } from "./FilterReducer";

import { getFilteredNoteList } from "./FilterFunction";

const FilterContext = createContext();

const useFilter = () => useContext(FilterContext);

const FilterProvider = ({ children }) => {

    const { noteDetail } = useNote();

    const { notes } = noteDetail;

    const [state, dispatch] = useReducer(filterReducer, {
        priority: "",
        label: [],
        date: ""
    })

    const filteredNoteList = getFilteredNoteList(state, notes);

    return (<FilterContext.Provider value={{ state, dispatch, filteredNoteList }}>
        {children}
    </FilterContext.Provider>)
}

export { useFilter, FilterProvider };

