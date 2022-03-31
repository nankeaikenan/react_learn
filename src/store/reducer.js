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
    if(action.type === "changeInputValue"){
        let newState = JSON.parse(JSON.stringify(state))
        newState.inputVal = action.value;
        return newState;
    }
    return state;
}
