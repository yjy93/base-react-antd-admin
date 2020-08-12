import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

function indexReducer(state={msg:'初始化的reducer'},action) {
    return state
}

const reducers = combineReducers({
    indexReducer,
})

const store = createStore(reducers,applyMiddleware(thunk));
export default store