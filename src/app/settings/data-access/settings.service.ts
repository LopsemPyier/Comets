import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { User } from '../../shared/types';
import updateInfoQuery from './graphql/updateInfo.graphql';
import updatePasswordQuery from './graphql/changePassword.graphql';
import getUserQuery from './graphql/getUser.graphql';

@Injectable({
	providedIn: 'root',
})
export class SettingsService {

	constructor(
		private apollo: Apollo,
	) {
	}

	private static saveToken(token: string): void {
		if (token) {
			localStorage.setItem('token', token);
		} else {
			localStorage.removeItem('token');
		}
	}

	getUser(): Observable<User> {
		return this.apollo.query<{ me: User }>({
			query: getUserQuery,
			errorPolicy: 'all',
		})
			.pipe(
				shareReplay(),
				map(value => {
					return value.data.me;
				}),
			);
	}

	updateUser(username: string, email: string): Observable<string | null> {
		return this.apollo.mutate<{ updateUser: string }>({
			mutation: updateInfoQuery,
			variables: {
				username,
				email,
			},
			errorPolicy: 'all',
		})
			.pipe(
				shareReplay(),
				map(value => {
					if (value.data) {
						SettingsService.saveToken(value.data.updateUser);
						return value.data.updateUser;
					}
					return null;
				}),
			);
	}

	updatePassword(old: string, newPassword: string): Observable<boolean | null> {
		return this.apollo.mutate<{ updatePassword: boolean }>({
			mutation: updatePasswordQuery,
			variables: {
				old,
				new: newPassword,
			},
		})
			.pipe(
				shareReplay(),
				map(value => {
					return value.data ? value.data.updatePassword : null;
				}),
			);
	}
}
