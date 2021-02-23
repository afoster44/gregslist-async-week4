export default class House {
    constructor({ bathrooms, bedrooms, description, imgUrl, levels, year, _id, id }) {
        this.bathrooms = bathrooms
        this.bedrooms = bedrooms
        this.description = description
        this.imgUrl = imgUrl
        this.levels = levels
        this.year = year
        this.id = _id || id
    }

    get Template() {
        return /*html*/`<div class="card col-4">
  <i class="fa fa-trash fa-2x text-danger d-flex align-self-end pointer" onclick="app.housesController.deleteHouse('${this.id}')" aria-hidden="true"></i>
  <img class="card-img-top" src="${this.imgUrl}" alt="">
  <div class="card-body">
      <h4 class="card-title">Bedrooms: ${this.bedrooms} - Year: ${this.year} </h4>
      <h3>Job Description: </h3>
      <p class="card-text">${this.description}</p>
      <p class="card-text">Bathrooms: ${this.bathrooms}</p>
      <p>Stories: ${this.levels}</p>
      <button class="btn btn-success" onclick="app.housesController.bid('${this.id}')">Bid</button>
  </div>
</div>`
    }
}