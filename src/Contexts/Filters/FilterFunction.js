const priority = ({ priority }, array) => {
    switch (priority) {
        case "LOW":
            return priority === "LOW" ? [...array].filter((item) => item.priority === "Low") : [...array];
        case "MEDIUM":
            return priority === "MEDIUM" ? [...array].filter((item) => item.priority === "Medium") : [...array];
        case "HIGH":
            return priority === "HIGH" ? [...array].filter((item) => item.priority === "High") : [...array];
        default:
            return array;
    }

}

const applyLabels = ({ label }, array) => {
    if (label.length === 0) {
        return array;
    } else {
        return array.filter((item) => label.includes(item.label))
    }
}

const sortByDate = ({ date }, array) => {
    switch (date) {
        case "OLDEST":
            return date === "OLDEST" ? [...array].sort((a, b) => new Date(b.date) < new Date(a.date) ? 1 : -1) : [...array];
        case "NEWEST":
            return date === "NEWEST" ? [...array].sort((a, b) => new Date(b.date) > new Date(a.date) ? 1 : -1) : [...array];
        default:
            return array;
    }

}

const applyFilters = (state, ...args) => (notes) => {
    return args.reduce((acc, curr) => {
        return curr(state, acc)
    }, notes)
}

export const getFilteredNoteList = (state, notes) => applyFilters(state, priority, applyLabels, sortByDate)(notes);

