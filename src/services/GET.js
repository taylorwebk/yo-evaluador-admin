import 'whatwg-fetch'
import IP from './IP'

let GET = {
  data () {
    return fetch(`http://${IP}/yo-evaluador-api/datos`)
    .then((res) => res.json())
  },
  subjects () {
    return fetch(`http://${IP}/yo-evaluador-api/materias`)
    .then(res => res.json())
  }
}
export default GET
