export const initialState = {
    login: null,
};
export const reducer = (state, action) => {
    if (action.type === "USER") {
        return {
            ...state,
            login: action.payload.login,
        };
    }
    return state;
}
