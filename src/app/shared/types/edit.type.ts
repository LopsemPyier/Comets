import { Action } from './action.enum';
import { User } from './user.type';

export type Edit = {
	id: string,
	actionType?: Action,
	createAt: Date,
	author: User
};
