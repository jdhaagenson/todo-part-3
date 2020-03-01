import reducer from './reducer.js'
import { combineReducers } from 'redux'

const todoApp = combineReducers({ todolist: reducer })

export default todoApp