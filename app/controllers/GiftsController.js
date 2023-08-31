import { getFormData } from "../utils/FormHandler.js";
import { giftsService } from "../services/GiftsService.js";
import { AppState } from "../AppState.js";
import { api } from "../services/AxiosService.js";
import { baseURL } from "../env.js";
import { setHTML } from "../utils/Writer.js";

export class GiftsController {
    constructor() {
        this.getGifts()
    }

    drawGifts() {
        let template = ''
        let cardContainer = document.getElementById('giftCardContainer')
        // AppState.gifts.forEach(gift => template += gift.GiftCardTemplate)
        // setHTML('giftCardContainer', template)
        AppState.gifts.forEach(gift => {
            if (gift.opened == true) {
                template += gift.GiftCardTemplate
                setHTML('giftCardContainer', template)
            } else if (gift.opened == false) {
                template += gift.GiftPlaceholder
                setHTML('giftCardContainer', template)
            }
        })
    }

    async getGifts() {
        try {
            await giftsService.getGifts()
            this.drawGifts()
        } catch (error) {
            alert('YOUR GIFTS WERE STOLEN, NO GIFTS!!!')
            console.log(error)
        }
    }

    async openGift(giftId) {
        await giftsService.openGift(giftId)
        this.drawGifts()
        this.drawGifts()
        console.log('OMG GIFT OPENED! 🤪😵');
        location.reload()
    }

    async createGift(formData) {
        window.event.preventDefault()
        let form = window.event.target
        let formResults = getFormData(form)
        await giftsService.createGift(formResults)
        this.drawGifts()
        location.reload()
    }


}