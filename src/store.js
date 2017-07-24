import {combineReducers, createStore, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import {createLogger} from 'redux-logger'
import {data} from './scenes/MainPanel/redux/reducer'
import {studentSubmit} from './scenes/Estudiante/redux/reducer'
import {teacher} from './scenes/Docente/redux/reducer'
import {subject} from './scenes/Materia/redux/reducer'
const rootReducer = combineReducers({
  data,
  studentSubmit,
  teacher,
  subject
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
