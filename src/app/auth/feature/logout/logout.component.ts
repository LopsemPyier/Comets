import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../../data-access/auth.service';
import { Router } from '@angular/router';
import { interval, Subscription } from 'rxjs';

@Component({
	selector: 'app-logout',
	templateUrl: './logout.component.html',
	styleUrls: ['./logout.component.scss'],
})
export class LogoutComponent implements OnInit, OnDestroy {

	time = 5;
	private subscription!: Subscription;

	constructor(
		private authService: AuthService,
		private router: Router,
	) {
	}

	ngOnInit(): void {
		this.authService.logout();

		this.subscription = interval(1000)
			.subscribe(_ => {
				this.time--;
			});
		setTimeout(
			() => this.goToHome(),
			5000,
		);
	}

	ngOnDestroy(): void {
		this.subscription.unsubscribe();
	}

	goToHome(): void {
		this.router.navigateByUrl('');
	}

	goToLogin(): void {
		this.router.navigateByUrl('/auth/login');
	}

}
