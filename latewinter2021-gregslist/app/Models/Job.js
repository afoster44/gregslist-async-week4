


export default class Job {
    constructor({ company, description, hours, jobTitle, rate, _id, id }) {
        this.company = company
        this.description = description
        this.hours = hours
        this.jobTitle = jobTitle
        this.rate = rate
        this.id = _id || id
    }

    get Template() {
        return /*html*/ `
        <div class="col-4 border shadow">
        <p>Company: ${this.company}</p>
        <p>${this.description}</p>
        <p>Job Title: ${this.jobTitle}</p>
        <p>Pay Rate: ${this.rate}</p>
    </div>
</div>
        `
    }
}