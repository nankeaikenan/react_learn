import {CHANGE_INPUT_VALUE, ADD_CONTENT} from "./actionTypes."
// 定义默认状态值（即默认数据）
const defaultState = {
    // input的文字
    inputVal: "写点文字",
    // 列表项数组
    list: [
        "来了来了",
        "第二条信息很刺激",
        "这一条也不错呀"
    ]
}

// 导出一个函数，用于返回state
//eslint-disable-next-line
export default (state = defaultState, action) => {
    let newState = JSON.parse(JSON.stringify(state))
    switch (action.type ){
        case CHANGE_INPUT_VALUE:
            newState.inputVal = action.value;
            return newState;
        case ADD_CONTENT:
            newState.list.push(action.value);
            return newState;
        default: return state;
    }

}
