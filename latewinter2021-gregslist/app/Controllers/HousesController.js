import { ProxyState } from "../AppState.js";
import { housesService, HousesService } from "../Services/HousesService.js";


function _draw() {
    let houses = ProxyState.houses
    let template = ''

    houses.forEach(house => template += house.Template)
    document.getElementById('houses').innerHTML = template
}

export default class HousesController {
    constructor() {
        console.log('hello from the houses controller');
        ProxyState.on('houses', _draw)
    }

    createHouse(event) {
        event.preventDefault()
        let form = event.target
        let rawHouse = {
            bathrooms: form.bathrooms.value,
            bedrooms: form.bedrooms.value,
            description: form.description.value,
            imgUrl: form.imgUrl.value,
            levels: form.levels.value,
            price: form.price.value,
            year: form.year.value,
            id: form.id.value
        }

        housesService.createHouse(rawHouse)
    }

    deleteHouse(id) {
        housesService.deleteHouse(id)
    }
}