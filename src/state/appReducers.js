const INITIAL_STATE = {
    tab: 'home'
};

export const appReducer = (state = INITIAL_STATE, action) => {
    switch (action.type){
        case "SET_TAB":
            state.tab = action.payload;
            return {...state};
        default:
            return state;
    }
}
