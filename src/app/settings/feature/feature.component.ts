import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IsLoadingService } from '@service-work/is-loading';
import { SettingsService } from '../data-access/settings.service';

@Component({
	selector: 'app-feature',
	templateUrl: './feature.component.html',
	styleUrls: ['./feature.component.scss'],
})
export class FeatureComponent implements OnInit {
	readonly LOADING_KEY = 'settings';
	readonly PASSWORD_LOADING_KEY = 'password';

	error: 'request' | 'internal' | 'none' = 'none';
	passwordError: 'invalid' | 'request' | 'internal' | 'none' = 'none';
	successPassword = false;
	success = false;

	languages = [
		{ key: 'en', value: 'English' },
		{ key: 'fr', value: 'Français' },
	];
	form = this.fb.group({
		username: ['', Validators.required],
		email: ['', [Validators.email, Validators.required]],
		lang: ['en', Validators.required],
	});

	passwordForm = this.fb.group({
		oldPassword: ['', Validators.required],
		newPassword: ['', Validators.required],
	});

	constructor(
		private fb: FormBuilder,
		private settingsService: SettingsService,
		private router: Router,
		private isLoadingService: IsLoadingService,
	) {
	}

	ngOnInit(): void {
		this.isLoadingService.add(
			this.settingsService.getUser()
				.subscribe(value => {
					this.form.reset({
						username: value.username,
						email: value.email,
						lang: 'en',
					});
				}),
		);
	}

	submit(): void {
		if (!this.form.valid) {
			return;
		}
		this.error = 'none';
		const { username, email, lang } = this.form.value;
		this.isLoadingService.add(this.settingsService.updateUser(username, email)
				.subscribe(
					(value) => {
						this.error = 'none';
						if (value) {
							this.form.reset({
								username,
								email,
								lang: 'en',
							});
							this.success = true;
							setTimeout(() => {
								this.success = false;
							}, 2000);
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
			});
	}

	submitPassword(): void {
		if (!this.passwordForm.valid) {
			return;
		}
		this.passwordError = 'none';
		const { oldPassword, newPassword } = this.passwordForm.value;
		this.isLoadingService.add(this.settingsService.updatePassword(oldPassword, newPassword)
				.subscribe(
					(value) => {
						this.error = 'none';
						if (value) {
							this.passwordForm.setValue({ oldPassword: '', newPassword: '' });
							this.passwordForm.reset();
							this.successPassword = true;
							setTimeout(() => {
								this.successPassword = false;
							}, 2000);
						}
					},
					(error) => {
						if (error.graphQLErrors) {
							this.handlePasswordError(error.graphQLErrors[0].extensions.code);
						} else if (error.networkError) {
							this.error = 'internal';
						}
					},
				),
			{
				key: this.PASSWORD_LOADING_KEY,
			});
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
			case 'INVALID_PASSWORD':
				this.passwordError = 'invalid';
				break;

			default :
				this.passwordError = 'request';
				break;
		}
	}
}
