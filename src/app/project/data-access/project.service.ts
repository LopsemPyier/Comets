import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Project } from '../../shared/types';
import { map, shareReplay } from 'rxjs/operators';
import { Apollo } from 'apollo-angular';
import dashboardQuery from './graphql/dashboard.graphql';
import getOneQuery from './graphql/getOne.graphql';
import createProjectMutation from './graphql/createProject.graphql';

@Injectable({
	providedIn: 'root',
})
export class ProjectService {

	constructor(
		private apollo: Apollo,
	) {
	}

	dashboard(): Observable<Project[]> {
		return this.apollo.query<{ projects: Project[] }>({
			query: dashboardQuery,
		}).pipe(shareReplay(), map(value => {
			return value.data.projects;
		}));
	}

	getById(id: string): Observable<Project> {
		return this.apollo.query<{ project: Project }>({
			query: getOneQuery,
			variables: {
				id,
			},
		}).pipe(shareReplay(), map(value => {
			return value.data.project;
		}));
	}

	create(name: string, description: string): Observable<Project | null> {
		return this.apollo.mutate<{ createProject: Project }>({
			mutation: createProjectMutation,
			errorPolicy: 'all',
			variables: {
				name,
				description,
			},
		}).pipe(shareReplay(), map(value => {
			if (value.data) {
				return value.data.createProject;
			} else {
				throwError('Unable to find data');
				return null;
			}
		}));
	}
}
