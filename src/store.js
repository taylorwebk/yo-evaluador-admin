import {combineReducers, createStore, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import {createLogger} from 'redux-logger'
import {data} from './scenes/MainPanel/redux/reducer'
import {studentSubmit} from './scenes/Estudiante/redux/reducer'
const rootReducer = combineReducers({
  data,
  studentSubmit
})
export default function store () {
  return createStore(
    rootReducer,
    applyMiddleware(
      thunkMiddleware,
      createLogger()
    )
  )
}
