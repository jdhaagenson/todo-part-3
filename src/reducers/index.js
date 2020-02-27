import todolist from './todolist.js'
import { combineReducers } from 'redux'

const todoApp = combineReducers({ todolist })

export default todoApp