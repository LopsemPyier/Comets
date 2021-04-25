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

	private token: string | null = null;

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
				if (value.data) {
					this.saveToken(value.data.login);
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
					this.saveToken(value.data.register);
					return value.data.register;
				}
				return '';
			}),
		);
	}

	logout(): void {
		this.saveToken(null);
	}

	private saveToken(token: string | null): void {
		this.token = token;
		if (this.token) {
			localStorage.setItem('token', this.token);
		} else {
			localStorage.removeItem('token');
		}
	}
}
