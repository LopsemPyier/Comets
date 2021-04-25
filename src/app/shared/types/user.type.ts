import { Project } from './project.type';

export type User = {
	id: string,
	username: string,
	email: string,
	projects?: Project[]
};
