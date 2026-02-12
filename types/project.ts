export type Project = {
    id: number;
    title: string;
    description: string;
    githubUrl?: string;
    deployUrl?: string;
    startDate: string;
    endDate: string | null;
    techs: Tech[];
};  