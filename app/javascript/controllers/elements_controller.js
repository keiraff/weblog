// import {Controller} from "stimulus"
// import Sortable from "sortablejs"
//
// export default class extends Controller {
import ApplicationController from './application_controller'

export default class extends ApplicationController {

    sort() {
        let element = document.getElementById('elements')
        let element_items = Array.from(document.getElementsByClassName('element-item'))
        let elements = element_items.map((element, index) => {
            return {id: element.dataset.id, position: index + 1}
        })
        console.log(elements)

        element.dataset.elements = JSON.stringify(elements)
        this.stimulate('ElementsReflex#sort', element)
    }
}