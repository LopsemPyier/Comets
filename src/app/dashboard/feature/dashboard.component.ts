import { Component, OnInit } from '@angular/core';
import { Project } from '../../shared/types';
import { FormControl } from '@angular/forms';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {

	searchForm = new FormControl();

	projects$: Project[] = [{
		id: '1',
		name: 'Project Name',
		description: 'Project Description',
		lastEdit: {
			id: '1',
			createAt: new Date(),
			author: {
				id: '1',
				username: 'LopsemPyier',
				email: 'lopsempyier@gmail.com',
			},
		},
		author: [{
			id: '1',
			username: 'LopsemPyier',
			email: 'lopsempyier@gmail.com',
		}, {
			id: '1',
			username: 'Juliette Anglade',
			email: 'lopsempyier@gmail.com',
		}],
	}, {
		id: '1',
		name: 'First Name',
		description: 'Project Description',
		lastEdit: {
			id: '1',
			createAt: new Date(),
			author: {
				id: '1',
				username: 'LopsemPyier',
				email: 'lopsempyier@gmail.com',
			},
		},
		author: [{
			id: '1',
			username: 'LopsemPyier',
			email: 'lopsempyier@gmail.com',
		}],
	}, {
		id: '1',
		name: 'Seconde Name',
		description: 'Project Description',
		lastEdit: {
			id: '1',
			createAt: new Date(),
			author: {
				id: '1',
				username: 'LopsemPyier',
				email: 'lopsempyier@gmail.com',
			},
		},
		author: [{
			id: '1',
			username: 'LopsemPyier',
			email: 'lopsempyier@gmail.com',
		}, {
			id: '1',
			username: 'Juliette Anglade',
			email: 'lopsempyier@gmail.com',
		}, {
			id: '1',
			username: 'Philémon Varnet',
			email: 'lopsempyier@gmail.com',
		}, {
			id: '1',
			username: 'Lilas Bordet',
			email: 'lopsempyier@gmail.com',
		}],
	}];

	constructor() {
	}

	ngOnInit(): void {
	}

}
