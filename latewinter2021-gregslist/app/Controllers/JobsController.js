import { ProxyState } from "../AppState.js";
import { JobsService } from "../Services/JobsService.js";


function _draw() {
    let jobs = ProxyState.jobs
    let template = ''
    jobs.forEach(j => template += j.Template)
    document.getElementById('jobs').innerHTML = template;
}

export default class JobsController {
    constructor() {
        console.log('linked to the Jobs Controller!');
        ProxyState.on('jobs', _draw)
    }
}