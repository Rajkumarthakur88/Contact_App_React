
const GlobalReducer = (state, action) => {
    switch (action.type) {
        case "SAVE_CONTACT":
            return {
                ...state,
                Data: [...state.Data, action.payload]
            }
        case "DELETE_CONTACT":
            return {
                ...state,
                Data: state.Data.filter(item => item.id !== action.payload)
            }

        case "EDIT_CONTACT":
            return {
                ...state,
                Edit: { MyContact: action.payload, isEdit: true }
            }
        case "UPDATE_CONTACT":

            return {
                ...state,
                Data: state.Data.map(item => item.id === action.payload.id ? action.payload : item),
                Edit: { MyContact: {}, isEdit: false }
            }
        case "FILTER_CONTACT":
            return {
                ...state,
                Filter: state.Data.filter(item => item.isType === action.payload)
            }
        case "SEARCH_CONTACT":
            console.log(action.payload)
            return {
                ...state,
                Search: state.Data.filter(item => item.name == action.payload)
            }

        default:
            return state
    }

}
export default GlobalReducer