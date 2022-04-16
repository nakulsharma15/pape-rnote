export const filterReducer = (state, action) => {

    const defaultState = { priority: "", label: [], date: "" };

    switch (action.type) {

        case "PRIORITY": return { ...state, priority: action.payload };

        case "LABEL": const { label } = state;
            if (label.includes(action.payload)) {
                return { ...state, label: label.filter((item) => item !== action.payload) }
            }
            else {
                return { ...state, label: [...label, action.payload] }
            }

        case "DATE": return { ...state, date: action.payload };

        case "CLEAR": return defaultState;

        default: return state;
    }
}