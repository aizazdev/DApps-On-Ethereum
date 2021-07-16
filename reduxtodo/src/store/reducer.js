
const initialState = {
    counter: 0
}

export const counterReducer = (state = initialState, action) => {
    console.log(state.counter);
    switch(action.type) {
        case 'INCREMENT': 
            return {
                ...state, counter: state.counter+1
            }
        case 'DECREMENT': 
            return {
                ...state, counter: state.counter-1
            }
        case 'BY_VALUE': 
            return {
                ...state, counter: state.counter + Number(action.data)
            }
        default: 
            return {
                ...state
            }
    }
}