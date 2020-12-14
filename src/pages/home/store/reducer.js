
const tiger = 100
 
//这是reducer
const reducer = (state = tiger, action) => {
    switch (action.type) {
        case '乘':
			return  state *= action.num
        case '除':
            return  state /= action.num
        default:
            return state;
    }
}

export default reducer