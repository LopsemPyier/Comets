import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from '../../../shared/types';
import { ProjectService } from '../../data-access/project.service';
import { IsLoadingService } from '@service-work/is-loading';
import { map } from 'rxjs/operators';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

	readonly LOADING_KEY = 'dashboard_query';

	projects$ = new Observable<Project[]>();

	constructor(
		private project: ProjectService,
		private isLoadingService: IsLoadingService
	) {
	}

	ngOnInit(): void {
		this.projects$ = this.isLoadingService.add(this.project.dashboard().pipe(map(value => sort(value, compareProject))), {
			key: this.LOADING_KEY,
		});
	}
}

function sort(array: Project[], compareFn: (a: Project, b: Project) => number): Project[] {
	const copy = array.slice();
	return copy.sort(compareFn);
}

function compareProject(a: Project, b: Project): number {
	return -(getTime(a.lastEdit.createAt) - getTime(b.lastEdit.createAt));
}

function getTime(date?: Date): number {
	return date != null ? new Date(date).getTime() : 0;
}
