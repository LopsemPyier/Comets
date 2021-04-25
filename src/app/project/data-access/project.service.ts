import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from '../../shared/types';
import { map, shareReplay } from 'rxjs/operators';
import { Apollo } from 'apollo-angular';
import dashboardQuery from './graphql/dashboard.graphql';

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
}
