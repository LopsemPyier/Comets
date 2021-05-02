import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../data-access/auth.service';
import { Router } from '@angular/router';
import { IsLoadingService } from '@service-work/is-loading';

@Component({
	selector: 'app-signup',
	templateUrl: './signup.component.html',
	styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {

	readonly LOADING_KEY = 'signup';

	error: 'username' | 'email' | 'request' | 'internal' | 'none' = 'none';
	form = this.fb.group({
		username: ['', Validators.required],
		email: ['', [Validators.required, Validators.email]],
		password: ['', Validators.required],
	});

	constructor(
		private fb: FormBuilder,
		private authService: AuthService,
		private router: Router,
		private isLoadingService: IsLoadingService,
	) {
	}

	ngOnInit(): void {
	}

	submit(): void {
		if (!this.form.valid) {
			return;
		}
		this.error = 'none';
		const { username, email, password } = this.form.value;
		this.isLoadingService.add(this.authService.register(username, email, password)
				.subscribe(
					() => {
						this.error = 'none';
						this.goToDashboard();
					},
					(error) => {
						if (error.graphQLErrors) {
							this.handleError(error.graphQLErrors[0].extensions.code);
						} else if (error.networkError) {
							this.error = 'internal';
						}
					},
				),
			{
				key: this.LOADING_KEY,
			});
	}

	goToDashboard(): void {
		this.router.navigateByUrl('/app/dashboard');
	}

	handleError(code: string): void {
		switch (code) {
			case 'EMAIL_TAKEN':
				this.error = 'email';
				break;

			default :
				this.error = 'request';
				break;
		}
	}
}
