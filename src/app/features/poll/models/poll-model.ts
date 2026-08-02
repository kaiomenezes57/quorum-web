import { OptionModel } from "./option-model";

export interface PollModel {
    id: string;
    userId: string;
    name: string;
    description: string;
    voteGoal: number;
    voteCount: number;
    createdAt: string;
    lastUpdatedAt: string;
    options: OptionModel[];
}
