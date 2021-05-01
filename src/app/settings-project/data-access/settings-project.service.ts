import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Project, User } from '../../shared/types';
import { FetchResult } from '@apollo/client/core';

import addAuthorMutation from './graphql/addAuthor.graphql';
import removeAuthorMutation from './graphql/removeAuthor.graphql';
import updateProjectMutation from './graphql/update.graphql';
import getUserByEmailQuery from './graphql/getUserByEmail.graphql';
import getProjectByIdQuery from './graphql/getProjectById.graphql';

@Injectable({
	providedIn: 'root',
})
export class SettingsProjectService {

	constructor(
		private apollo: Apollo,
	) {
	}

	addAuthor(projectId: string, authorId: string): Observable<boolean> {
		return this.apollo.mutate<{ addAuthor: boolean }>({
			mutation: addAuthorMutation,
			variables: {
				project_id: projectId,
				author_id: authorId,
			},
			errorPolicy: 'all',
		})
			.pipe(
				shareReplay(),
				map(({ data }: FetchResult<{ addAuthor: boolean }>) => {
					return data ? data.addAuthor : false;
				}),
			);
	}

	removeAuthor(projectId: string, authorId: string): Observable<boolean> {
		return this.apollo.mutate<{ removeAuthor: boolean }>({
			mutation: removeAuthorMutation,
			variables: {
				project_id: projectId,
				author_id: authorId,
			},
			errorPolicy: 'all',
		})
			.pipe(
				shareReplay(),
				map(({ data }: FetchResult<{ removeAuthor: boolean }>) => {
					return data ? data.removeAuthor : false;
				}),
			);
	}

	getUserByEmail(email: string): Observable<User> {
		return this.apollo.query<{ userByEmail: User }>({
			query: getUserByEmailQuery,
			variables: {
				email,
			},
		})
			.pipe(
				shareReplay(),
				map(value => {
					return value.data.userByEmail;
				}),
			);
	}

	getProject(id: string): Observable<Project> {
		return this.apollo.query<{ project: Project }>({
			query: getProjectByIdQuery,
			variables: {
				id,
			},
			errorPolicy: 'all',
		})
			.pipe(
				shareReplay(),
				map(value => {
					return value.data.project;
				}),
			);
	}

	updateProject(id: string, name: string, description: string): Observable<Project | null> {
		return this.apollo.mutate<{ updateProject: Project }>({
			mutation: updateProjectMutation,
			variables: {
				id,
				name,
				description,
			},
			errorPolicy: 'all',
		})
			.pipe(
				shareReplay(),
				map(value => {
					return value.data ? value.data.updateProject : null;
				}),
			);
	}
}
