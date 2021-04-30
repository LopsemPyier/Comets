import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';

import dashboardQuery from './graphql/dashboard.graphql';
import { Observable } from 'rxjs';
import { Project } from '../../shared/types';
import { map, shareReplay } from 'rxjs/operators';

interface DashboardQueryResponse {
	dashboard: Project[];
}

@Injectable({
	providedIn: 'root',
})
export class DashboardService {

	constructor(
		private apollo: Apollo,
	) {
	}

	dashboard(): Observable<Project[]> {
		return this.apollo.query<DashboardQueryResponse>({
			query: dashboardQuery,
		})
			.pipe(
				shareReplay(),
				map(value => {
					return value.data.dashboard;
				}),
			);
	}
}
