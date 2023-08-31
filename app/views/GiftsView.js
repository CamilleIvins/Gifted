export const GiftsView = /*html*/`    <section class="row p-0 m-0 container-fluid">
<div class="col-12 col-md-4 p-0 m-0 bg-secondary-subtle">
  <form class="p-5" onsubmit="app.GiftsController.createGift()">
    <div class="mb-3">
      <label for="tagInput" class="form-label">Gif/Img Tag</label>
      <input type="text" class="form-control" id="tagInput" name="tag">
    </div>
    <div class="mb-3">
      <label for="urlInput" class="form-label">Gif/Img URL</label>
      <input type="text" class="form-control" id="urlInput" name="url">
    </div>
    <div class="btn-container">
      <button type="submit" class="btn btn-primary">SUBMIT</button>
    </div>
    <hr class="text-dark">
    <div class="mb-3 d-flex flex-row">
      <input type="text" placeholder="Search..." class="form-control"><button class="btn btn-primary fs-5" type="submit"><i
          class="mdi mdi-magnify"></i></button>
    </div>
  </form>
</div>
<div class="col-12 col-md-8 p-0 m-0 bg-secondary-subtle">
  <section class="row p-0 m-0" id="giftCardContainer">
    <!-- Gift 1 -->
    <!-- Gift 2 -->
  </section>
</div>
</section>`