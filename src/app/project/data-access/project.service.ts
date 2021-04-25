import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Project } from '../../shared/types';
import { delay, shareReplay } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class ProjectService {

	constructor() {
	}

	dashboard(): Observable<Project[]> {
		return of<Project[]>(
			[
				{
					id: '1',
					name: 'First Project',
					description: 'The description of the first project',
					lastEdit: {
						id: '19',
						createAt: new Date(),
						author: {
							id: '8',
							username: 'LopsemPyier',
							email: 'lopsempyier@gmail.com'
						}
					}
				}
			]
		).pipe(delay(1000), shareReplay());
	}
}
