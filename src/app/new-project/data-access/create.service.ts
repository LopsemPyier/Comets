import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { Project } from '../../shared/types';
import { map, shareReplay } from 'rxjs/operators';

import createProjectMutation from './graphql/create.graphql';

interface CreateProjectMutationResponse {
	createProject: Project;
}

@Injectable({
	providedIn: 'root',
})
export class CreateService {

	constructor(
		private apollo: Apollo,
	) {
	}

	create(name: string, description: string): Observable<Project | null> {
		return this.apollo.mutate<CreateProjectMutationResponse>({
			mutation: createProjectMutation,
			variables: {
				name,
				description,
			},
			errorPolicy: 'all',
		})
			.pipe(
				shareReplay(),
				map(value => {
					return (value.data) ? value.data.createProject : null;
				}),
			);
	}
}
