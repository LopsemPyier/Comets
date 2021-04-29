import { User } from './user.type';

export enum Status {
	PENDING,
	ACCEPTED,
	OWNER
}

export type Author = {
	status: Status,
	user: User
};
