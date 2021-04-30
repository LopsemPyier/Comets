import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Author, Status } from '../../shared/types/author.type';
import { ActivatedRoute, Router } from '@angular/router';
import { IsLoadingService } from '@service-work/is-loading';
import { SettingsProjectService } from '../data-access/settings-project.service';
import { User } from '../../shared/types';

@Component({
	selector: 'app-settings-project',
	templateUrl: './settings-project.component.html',
	styleUrls: ['./settings-project.component.scss'],
})
export class SettingsProjectComponent implements OnInit {

	readonly LOADING_KEY = 'new_project';

	id!: string;

	error: 'request' | 'internal' | 'none' = 'none';
	form = this.fb.group({
		name: ['', Validators.required],
		description: [''],
	});
	newAuthorForm = new FormControl('', [Validators.email, Validators.required]);
	open = false;
	authors: Author[] = [];

	constructor(
		private fb: FormBuilder,
		private settingsProjectService: SettingsProjectService,
		private router: Router,
		private route: ActivatedRoute,
		private isLoadingService: IsLoadingService,
	) {
	}

	ngOnInit(): void {
		this.id = this.route.snapshot.params.id;
		this.isLoadingService.add(
			this.settingsProjectService.getProject(this.id)
				.subscribe(value => {
					this.form.setValue({
						name: value.name,
						description: value.description,
					});
					this.authors = value.authors ? value.authors.map(user => ({
						status: Status.ACCEPTED,
						user,
					})) : [];
				}),
		);
	}

	getUserAndAddIt(): void {
		if (!this.newAuthorForm.valid) {
			return;
		}
		const email = this.newAuthorForm.value;
		this.isLoadingService.add(
			this.settingsProjectService.getUserByEmail(email)
				.subscribe(value => {
					this.addAuthor(value);
				}),
		);
	}

	addAuthor(user: User): void {
		this.open = false;
		this.isLoadingService.add(
			this.settingsProjectService.addAuthor(this.id, user.id)
				.subscribe(_ => {
					this.authors.push({
						status: Status.ACCEPTED, user,
					});
				}),
		);
	}

	deleteAuthor(userId: string): void {
		this.isLoadingService.add(
			this.settingsProjectService.removeAuthor(this.id, userId)
				.subscribe(_ => {
					this.authors = this.authors.filter(author => author.user.id !== userId);
				}),
		);
	}

	submit(): void {
		if (!this.form.valid) {
			return;
		}
		this.error = 'none';
		const { name, description } = this.form.value;
		this.isLoadingService.add(this.settingsProjectService.updateProject(this.id, name, description)
				.subscribe(
					(value) => {
						if (value) {
							this.error = 'none';
							this.form.setValue({
								name: value.name,
								description: value.description,
							});
						} else {
							this.error = 'request';
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

	goToEditor(id: string): void {
		this.router.navigate(['/editor', id]);
	}

	handleError(code: string): void {
		switch (code) {
			default :
				this.error = 'request';
				break;
		}
	}
}
