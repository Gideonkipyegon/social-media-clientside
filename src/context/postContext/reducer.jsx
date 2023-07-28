const Reducer = (state, action) => {
    switch (action.type) {

        case "ADD":
            return {
                ui: action.payload
            }
        case "VIEW":
            return {
                ui: action.payload
            }
        case "PROFILE":
            return {
                ui: action.payload
            }
        case "CHAT":
            return {
                ui: action.payload
            }
        case "FRIENDS":
            return {
                ui: action.payload
            }
        case "LOGIN":
            return {
                ui: action.payload
            }
        default:
            return state;
    }
}

export default Reducer;