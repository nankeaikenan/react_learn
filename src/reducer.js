export const numReducer = (state, action) => {
    let newState = JSON.parse(JSON.stringify(state))
    switch (action.type){
        case 'add':
            newState.num += action.value;
            return newState
        case 'cut':
            newState.num--;
            return newState
        default:
            return newState
    }
}