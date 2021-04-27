import { Action } from './action.enum';
import { User } from './user.type';
import { File } from './file.type';

export type Edit = {
	id: string,
	actionType?: Action,
	createAt: Date,
	author: User,
	file: File
};
