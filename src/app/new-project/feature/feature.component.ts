import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ProjectService } from '../../project/data-access/project.service';
import { Router } from '@angular/router';
import { IsLoadingService } from '@service-work/is-loading';
import { Author, Status } from '../../shared/types/author.type';

@Component({
	selector: 'app-feature',
	templateUrl: './feature.component.html',
	styleUrls: ['./feature.component.scss'],
})
export class FeatureComponent implements OnInit {

	readonly LOADING_KEY = 'new_project';

	error: 'request' | 'internal' | 'none' = 'none';
	form = this.fb.group({
		name: ['', Validators.required],
		description: [''],
	});
	newAuthorForm = new FormControl('', [Validators.email, Validators.required]);
	open = false;
	authors: Author[] = [{
		status: Status.OWNER,
		user: {
			id: '1',
			username: 'LopsemPyier',
			email: 'lopsempyier@gmail.com',
		},
	}, {
		status: Status.ACCEPTED,
		user: {
			id: '1',
			username: 'Juliette Anglade',
			email: 'juliette.anglade2003@gmail.com',
		},
	}, {
		status: Status.PENDING,
		user: {
			id: '1',
			username: 'Philémon Varnet',
			email: 'phil.varnet@gmail.com',
		},
	}];

	constructor(
		private fb: FormBuilder,
		private projectService: ProjectService,
		private router: Router,
		private isLoadingService: IsLoadingService,
	) {
	}

	ngOnInit(): void {
	}

	addAuthor(): void {
		this.open = false;
		this.authors.push({
			status: Status.PENDING, user: {
				id: 'new user id',
				email: this.newAuthorForm.value,
				username: 'new user username',
			},
		});
	}

	deleteAuthor(id: string): void {
		this.authors = this.authors.filter(author => author.user.email !== id);
	}

	submit(): void {
		if (!this.form.valid) {
			return;
		}
		this.error = 'none';
		const { name, description } = this.form.value;
		this.isLoadingService.add(this.projectService.create(name, description)
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
			});
	}

	goToEditor(id: string): void {
		this.router.navigate(['/project', id]);
	}

	handleError(code: string): void {
		switch (code) {
			default :
				this.error = 'request';
				break;
		}
	}
}
