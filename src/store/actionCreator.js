import {CHANGE_INPUT_VALUE, ADD_CONTENT} from "./actionTypes."

export const changeInputValueAction = (val) => {
       return {
           type: CHANGE_INPUT_VALUE,
           value: val
       }
}

export const addContentAction = (val) => {
    return {
        type: ADD_CONTENT,
        value: val
    }
}