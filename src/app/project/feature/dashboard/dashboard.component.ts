import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from '../../../shared/types';
import { ProjectService } from '../../data-access/project.service';
import { IsLoadingService } from '@service-work/is-loading';

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
		this.projects$ = this.isLoadingService.add(this.project.dashboard(), {
			key: this.LOADING_KEY
		});
	}
}
