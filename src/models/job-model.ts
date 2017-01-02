import { IJob } from '../interfaces/IJob';

export class Job implements IJob {
    id: string;
    title: string;
    description: string;
    tags: string[];
    creatorId: string;
    creatorUsername: string;

    constructor(id: string, title: string, description: string, tags: string[], creatorId: string, creatorUsername: string) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.tags = tags;
        this.creatorId = creatorId;
        this.creatorUsername = creatorUsername;
    }
}
