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
let POST = {
  students (data) {
    return fetch(`http://${IP}/yo-evaluador-api/estudiante`,
    config(data))
    .then((res) => {
      return res.json()
    })
  },
  teachers (data) {
    return fetch(`http://${IP}/yo-evaluador-api/docente`,
      config(data)).then((res) => res.json())
  },
  subject (data) {
    return fetch(`http://${IP}/yo-evaluador-api/materia`,
      config(data)).then(res => res.json())
  }
}
export default POST
