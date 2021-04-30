import { Component, OnInit } from '@angular/core';
import { Project } from '../../shared/types';
import { FormControl } from '@angular/forms';
import { DashboardService } from '../data-access/dashboard.service';
import { IsLoadingService } from '@service-work/is-loading';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {

	searchForm = new FormControl();

	readonly LOADING_KEY = 'DASHBOARD';

	projects$ = new Observable<Project[]>();

	reverse = false;

	constructor(
		private dashboardService: DashboardService,
		private isLoadingService: IsLoadingService,
	) {
	}

	ngOnInit(): void {
		this.refresh();
	}

	refresh(): void {
		this.projects$ = this.isLoadingService.add(
			this.dashboardService.dashboard().pipe(map(value => sort(value, this.reverse ? compareProject : compareProjectReverse))), {
				key: this.LOADING_KEY,
			},
		);
	}

	switch(): void {
		this.reverse = !this.reverse;
		this.refresh();
	}

}

function sort(array: Project[], compareFn: (a: Project, b: Project) => number): Project[] {
	const copy = array.slice();
	return copy.sort(compareFn);
}

function compareProject(a: Project, b: Project): number {
	return (getTime(a.lastEdit.createAt) - getTime(b.lastEdit.createAt));
}

function compareProjectReverse(a: Project, b: Project): number {
	return -compareProject(a, b);
}

function getTime(date?: Date): number {
	return date != null ? new Date(date).getTime() : 0;
}

