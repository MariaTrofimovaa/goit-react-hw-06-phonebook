import { combineReducers } from "redux"
import phoneBookReducer from "./phonebook/phoneBook.reducer.js.js";


const rootReducer = combineReducers({
    contacts: phoneBookReducer,
})

export default rootReducer;