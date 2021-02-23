import { ProxyState } from "../AppState.js";
import Job from "../Models/Job.js";
import { api } from "./AxiosService.js";


export class JobsService {
    constructor() {
        console.log('linked to Jobs Service!');
        this.getJobs()
    }

    async getJobs() {
        try {
            const res = await api.get('jobs');
            ProxyState.jobs = res.data.map(job => new Job(job))
            console.log(res.data);
        } catch (error) {

        }
    }
}

export const jobsService = new JobsService();