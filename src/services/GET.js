import 'whatwg-fetch'
import IP from './IP'

let GET = {
  data () {
    return fetch(`http://${IP}/yo-evaluador-api/datos`)
    .then((res) => res.json())
  }
}
export default GET
