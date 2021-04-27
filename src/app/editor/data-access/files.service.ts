import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { File } from '../../shared/types';
import getFiles from './graphql/files.graphql';
import { map, shareReplay } from 'rxjs/operators';

@Injectable({
	providedIn: 'root',
})
export class FilesService {

	constructor(
		private apollo: Apollo,
	) {
	}

	getFilesForProjectId(id: string): Observable<File[]> {
		return this.apollo.query<{ project: { files: File[] } }>({
			query: getFiles,
			variables: {
				id,
			},
		}).pipe(
			shareReplay(),
			map(value => {
				return value.data.project.files;
			}),
		);
	}
}
