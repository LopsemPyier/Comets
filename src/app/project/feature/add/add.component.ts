import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IsLoadingService } from '@service-work/is-loading';
import { ProjectService } from '../../data-access/project.service';

@Component({
	selector: 'app-add',
	templateUrl: './add.component.html',
	styleUrls: ['./add.component.scss'],
})
export class AddComponent implements OnInit {

	readonly LOADING_KEY = 'new_project';

	error: 'request' | 'internal' | 'none' = 'none';
	form = this.fb.group({
		name: ['', Validators.required],
		description: [''],
	});

	constructor(
		private fb: FormBuilder,
		private projectService: ProjectService,
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
