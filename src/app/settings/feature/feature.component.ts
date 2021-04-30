import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IsLoadingService } from '@service-work/is-loading';
import { AuthService } from '../../auth/data-access/auth.service';

@Component({
	selector: 'app-feature',
	templateUrl: './feature.component.html',
	styleUrls: ['./feature.component.scss'],
})
export class FeatureComponent implements OnInit {
	readonly LOADING_KEY = 'new_project';

	error: 'request' | 'internal' | 'none' = 'none';
	passwordError: 'diff' | 'request' | 'internal' | 'none' = 'none';
	form = this.fb.group({
		username: ['', Validators.required],
		email: ['', [Validators.email, Validators.required]],
		theme: [false, Validators.required],
		lang: ['en', Validators.required],
	});

	passwordForm = this.fb.group({
		password: ['', Validators.required],
		verify: ['', Validators.required],
	});

	constructor(
		private fb: FormBuilder,
		private authService: AuthService,
		private router: Router,
		private isLoadingService: IsLoadingService,
	) {
	}

	ngOnInit(): void {
		const user = {
			id: '1',
			username: 'LopsemPyier',
			email: 'lopsempyier@gmail.com',
		};
		this.form.patchValue({
			username: user.username,
			email: user.email,
		});
	}

	submit(): void {
		if (!this.form.valid) {
			return;
		}
		this.error = 'none';
		const { username, email, lang, theme } = this.form.value;
		/*this.isLoadingService.add(this.authService.save(username, email, lang, theme)
				.subscribe(
					(value) => {
						this.error = 'none';
						if (value) {
							this.goToEditor(value.id);
						}
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
			});*/
	}

	submitPassword(): void {
		if (!this.passwordForm.valid) {
			return;
		}
		this.passwordError = 'none';
		const { password, verify } = this.passwordForm.value;
		if (password !== verify) {
			this.passwordError = 'diff';
			return;
		}
		/*this.isLoadingService.add(this.authService.save(username, email, lang, theme)
				.subscribe(
					(value) => {
						this.error = 'none';
						if (value) {
							this.goToEditor(value.id);
						}
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
			});*/
	}

	handleError(code: string): void {
		switch (code) {
			default :
				this.error = 'request';
				break;
		}
	}

	handlePasswordError(code: string): void {
		switch (code) {
			default :
				this.passwordError = 'request';
				break;
		}
	}
}
