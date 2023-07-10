const weeklyReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_WEEKLY':
            return action.payload;
        default:
                return state;
    }
        
}

export default weeklyReducer;