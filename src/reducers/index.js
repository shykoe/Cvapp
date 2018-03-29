import { combineReducers } from 'redux';
import NavigationReducer from './NavigationReducer'
const rootReducer = combineReducers({
	main:NavigationReducer
})

export default rootReducer