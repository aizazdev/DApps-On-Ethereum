const initialState = {
    counter: 0,
    user: {
        name: "Aizaz"
    }
}
export const counterReducer = (state=initialState, action)=> {
    switch(action.type) {
        case 'INCREMENT': 
            return {
                ...state, counter: state.state.counter++
            }
        case 'DECREMENT': 
            return {
                ...state, counter: state.state.counter--
            }
        case 'BY_NAME': 
            return {
                ...state, user: {}
            }
        default: 
            return {
                state
            }
    }
}