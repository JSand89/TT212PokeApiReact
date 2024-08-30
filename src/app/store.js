import { configureStore } from "@reduxjs/toolkit"
import TeamReducer from "../features/team/teamSlice"

const store = configureStore({
    reducer:{
        team : TeamReducer
    }
})

export default store