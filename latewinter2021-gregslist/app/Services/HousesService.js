import { ProxyState } from "../AppState.js";
import House from "../Models/House.js";
import { api } from "./AxiosService.js";

export class HousesService {
    constructor() {
        console.log('hello from the houses service!');
        this.getHouses();
    }

    async getHouses() {
        try {
            const res = await api.get('houses')
            console.log(res.data);
            ProxyState.houses = res.data.map(h => new House(h))
        } catch (error) {
            console.error(error)
        }
    }

    async createHouse(rawHouse) {
        try {
            const res = await api.post('houses', rawHouse)
            ProxyState.houses = [...ProxyState.houses, new House(res.data)]
        } catch (error) {
            console.error(error)
        }
    }

    async deleteHouse(id) {
        try {
            const res = await api.delete(`houses/${id}`)
            this.getHouses();
        } catch (error) {
            console.error(error)
        }
    }
}

export const housesService = new HousesService();