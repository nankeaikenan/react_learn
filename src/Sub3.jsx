import React, {createContext} from 'react';
const NumContext = createContext();
function Sub3() {
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

export default Sub3;