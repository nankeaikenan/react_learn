import React, {useReducer, createContext} from 'react';
import {numReducer} from "./reducer";
import Sub1 from "./Sub1";

const NumContext = createContext()


function Sub2(){
    return (
        <NumContext.Consumer>
            {
                ({state, dispatch}) => {
                    return (
                        <div>
                            <p>{state.num}</p>
                            <button onClick={() => dispatch({type: 'cut'})}>subCut</button>
                        </div>
                    )
                }
            }
        </NumContext.Consumer>
    )
}
function App4() {
    const [state, dispatch] = useReducer(numReducer, {num: 1})
    const handAdd = () => {
        const action = {
            type: 'add',
            value: 2
        }
        dispatch(action)
    }
    const handCut = () => {
        const action = {
            type: 'cut',
        }
        dispatch(action)
    }
    return (
        <div>
            <p>{state.num}</p>
            <button onClick={handAdd}>add</button>
            <button onClick={handCut}>cut</button>
            <Sub1 num={state.num} handAdd={handAdd}/>
            <NumContext.Provider value={{state, dispatch}}>
                <Sub2/>
            </NumContext.Provider>
        </div>
    );
}

export default App4;