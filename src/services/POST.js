import 'whatwg-fetch'
import IP from './IP'
let POST = {
  students (data) {
    return fetch(`http://${IP}/yo-evaluador-api/estudiante`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then((res) => {
      // console.log(res.json())
      return res.json()
    })
  },
  teachers (data) {
    return fetch(`http://${IP}/yo-evaluador-api/docente`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then((res) => res.json())
  }
}
export default POST
