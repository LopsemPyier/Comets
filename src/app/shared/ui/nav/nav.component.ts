import { Component, OnInit } from '@angular/core';
import { User } from '../../types';

@Component({
	selector: 'app-nav',
	templateUrl: './nav.component.html',
	styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {

	user: User = {
		id: '1',
		username: 'LopsemPyier',
		email: 'lopsempyier@gmail.com',
	};

	constructor() {
	}

	ngOnInit(): void {
	}

	logout(): void {

	}
}
