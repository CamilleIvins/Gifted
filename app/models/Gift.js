export class Gift {
    constructor(data) {
        this.tag = data.tag,
            this.url = data.url,
            this.opened = data.opened,
            this.id = data.id
    }

    get GiftCardTemplate() {
        return /*html*/ `        <div class="col-12 col-md-4 p-o m-0  d-flex justify-content-center ">
        <!-- Actual Gift -->
        <div class="card shadow" style="width: 18rem; max-height: 40rem;" id="gift-card" onclick="app.GiftsController.openGift('${this.id}')">
          <img
            src=${this.url}
            alt="" id="gift-img">
          <div class="card-body">
            <p class="card-text" id="gift-description">${this.tag}</p>
          </div>
        </div>
      </div>`
    }

    get GiftPlaceholder() {
        return /*html*/`          <div class="col-12 col-md-4 p-o m-0  d-flex justify-content-center">
        <!-- Placeholder Gift -->
        <div class="card shadow" style="width: 18rem; max-height: 40rem;" id="gift-card-placeholder" onclick="app.GiftsController.openGift('${this.id}')">
          <img
            src="https://media.istockphoto.com/id/1398880959/photo/question-mark-symbol-for-faq-information-problem-and-solution-concepts-quiz-test-survey.jpg?s=2048x2048&w=is&k=20&c=o4ou46Qu7rJak9M88vUl06jViRS26epQm_N9C2nwr4w="
            alt="" id="gift-img-placeholder">
          <div class="card-body">
            <p class="card-text" id="gift-description-placeholder">${this.tag}</p>
          </div>
        </div>
      </div>`
    }
}