import { TestBed } from '@angular/core/testing';

import { SettingsProjectService } from './settings-project.service';

describe('SettingsProjectService', () => {
	let service: SettingsProjectService;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(SettingsProjectService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
});
