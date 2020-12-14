import {combineReducers } from 'redux'
import {reducer as home} from '../pages/home/store'
const tiger = 100
//这是reducer
const globalReducer = (state = tiger, action) => {
    switch (action.type) {
        case '加':
			return  state += action.num
        case '减':
            return  state -= action.num
        default:
            return state;
    }
}



export default combineReducers({
    global:globalReducer,
    home
})