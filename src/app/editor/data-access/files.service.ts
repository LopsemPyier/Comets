import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable, throwError } from 'rxjs';
import { File } from '../../shared/types';
import getFiles from './graphql/files.graphql';
import addFile from './graphql/add.graphql';
import deleteFile from './graphql/delete.graphql';
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

	createFile(name: string, extension: string | null, parent: string | null, folder: boolean, project: string): Observable<File | null> {
		return this.apollo.mutate<{ createFile: File }>({
			mutation: addFile,
			variables: {
				name,
				extension,
				parent,
				folder,
				project
			},
			errorPolicy: 'all'
		}).pipe(
			shareReplay(),
			map(value => {
				if (value.data) {
					return value.data.createFile;
				} else {
					throwError('Unable to find data');
					return null;
				}
			})
		);
	}

	deleteFile(id: string): Observable<boolean | null> {
		return this.apollo.mutate<{ deleteFile: boolean }>({
			mutation: deleteFile,
			variables: {
				id
			},
			errorPolicy: 'all'
		}).pipe(
			shareReplay(),
			map(value => {
				if (value.data) {
					return value.data.deleteFile;
				} else {
					throwError('Unable to find data');
					return null;
				}
			})
		);
	}
}
