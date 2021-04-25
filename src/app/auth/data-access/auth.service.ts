import { Injectable } from '@angular/core';
import loginMutation from './graphql/login.graphql';
import registerMutation from './graphql/register.graphql';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Injectable({
	providedIn: 'root',
})
export class AuthService {

	constructor(
		private apollo: Apollo,
	) {
	}

	login(email: string, password: string): Observable<string> {
		return this.apollo.mutate<{ login: string }>({
			mutation: loginMutation,
			variables: {
				email,
				password,
			},
		}).pipe(
			shareReplay(),
			map(value => {
				console.log(value.errors);
				if (value.data) {
					return value.data.login;
				}
				return '';
			}),
		);
	}

	register(username: string, email: string, password: string): Observable<string> {
		return this.apollo.mutate<{ register: string }>({
			mutation: registerMutation,
			variables: {
				username,
				email,
				password,
			},
		}).pipe(
			shareReplay(),
			map(value => {
				if (value.data) {
					return value.data.register;
				}
				return '';
			}),
		);
	}
}
