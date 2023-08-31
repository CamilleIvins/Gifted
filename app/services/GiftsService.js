import { GiftsController } from "../controllers/GiftsController.js"
import { AppState } from "../AppState.js"
import { Gift } from "../models/Gift.js"
import { api } from "./AxiosService.js"
import { baseURL } from "../env.js"



class GiftsService {

    async getGifts() {
        let res = await api.get('/api/gifts')
        let myGifts = res.data
        let newGifts = res.data.map(g => new Gift(g))
        AppState.gifts = newGifts
        // WORKS
        // AppState.gifts[17].opened = false
    }

    async createGift(formResults) {
        let res = await api.post(`/api/gifts`, formResults)
        let newGift = new Gift(res.data)
        AppState.gifts.push(newGift)
    }

    async openGift(giftId) {
        let foundGift = AppState.gifts.find(gift => gift.id == giftId)
        foundGift.opened = true
        const res = await api.put(`api/gifts/${foundGift.id}`, foundGift)
        let openGift = new Gift(res.data)
        console.log(res.data)
    }

}

export const giftsService = new GiftsService()