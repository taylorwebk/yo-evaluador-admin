import 'whatwg-fetch'
import IP from './IP'
function config (data) {
  return {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }
}
const url = (str) => `http://${IP}/yo-evaluador-api/${str}`
let POST = {
  students (data) {
    return fetch(url('estudiante'),
    config(data))
    .then((res) => {
      return res.json()
    })
  },
  teachers (data) {
    return fetch(url('docente'),
      config(data)).then((res) => res.json())
  },
  subject (data) {
    return fetch(url('materia'),
      config(data)).then(res => res.json())
  },
  class (data) {
    return fetch(url('clase'),
      config(data)).then(res => res.json())
  }
}
export default POST
