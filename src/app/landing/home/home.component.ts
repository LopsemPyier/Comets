import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
	os: 'windows' | 'macos' | 'linux' | 'android' | 'other' = 'other';

	constructor() {
	}

	ngOnInit(): void {
	}

	test($event: IntersectionObserverEntry[]): void {
		if ($event[0].isIntersecting) {
			$event[0].target.classList.remove('onScroll');
		}
	}
}
