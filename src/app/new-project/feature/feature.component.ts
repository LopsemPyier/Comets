import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IsLoadingService } from '@service-work/is-loading';
import { CreateService } from '../data-access/create.service';

@Component({
	selector: 'app-feature',
	templateUrl: './feature.component.html',
	styleUrls: ['./feature.component.scss'],
})
export class FeatureComponent implements OnInit {

	readonly LOADING_KEY = 'new_project';

	error: 'request' | 'internal' | 'none' = 'none';
	success = false;
	form = this.fb.group({
		name: ['', Validators.required],
		description: [''],
	});

	constructor(
		private fb: FormBuilder,
		private createService: CreateService,
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
		this.isLoadingService.add(this.createService.create(name, description)
				.subscribe(
					(value) => {
						if (value) {
							this.error = 'none';
							this.success = true;
							this.goToEditor(value.id);
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
