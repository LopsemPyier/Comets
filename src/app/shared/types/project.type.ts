import { Edit } from './edit.type';
import { User } from './user.type';

export type Project = {
	id: string,
	name: string,
	description?: string,
	lastEdit: Edit
	edits?: Edit[],
	author?: User[]
};
