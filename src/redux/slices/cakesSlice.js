import { createSlice } from "@reduxjs/toolkit"
import axios from "axios";

const initialStates = {entities: [], isLoading: true};

const cakesSlice = createSlice({
    name: "cakes",
    initialState: initialStates,
    reducers: { 
        set(state, action) {
            state.entities = action.payload;
            state.isLoading = false;
        },
        quantity(state, action) {
            const cake = state.entities.find(cakes => cakes.id === action.payload.id);
            cake.count += action.payload.value
        },
        error(state, action) {
            state.isLoading = true;
            console.error("Ошибка при загрузке тортов:", action.payload);
        }
    }
});
export default cakesSlice.reducer;
const { quantity, set } = cakesSlice.actions;

export const changeCakesQuantity = (id, value) => {
    return quantity({id: id, value: value})
}

export const getCakes = () => async (dispatch) => { 
    try {
        const response = await axios.get("/api/posts");
        dispatch(set(response.data));
    } catch (error) {
        dispatch(error(error));
    }
}