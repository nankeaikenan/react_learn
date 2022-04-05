const defaultState = {
    count: 22
}
// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState, action) => {
    if(action.type === "add_count"){
        const newState = JSON.parse(JSON.stringify(state))
        newState.count += action.value;
        return newState;
    }
    return state;
}
