import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, FormsModule, NgControl, ReactiveFormsModule } from '@angular/forms';
import { IconModule } from '../icon/icon.module';

import { InputComponent } from './input.component';

describe('InputComponent', () => {
	let component: InputComponent;
	let fixture: ComponentFixture<InputComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [InputComponent],
			imports: [IconModule, FormsModule, ReactiveFormsModule]
		})
			.overrideComponent(InputComponent, {
				set: {
					providers: [
						{
							provide: NgControl,
							useValue: new FormControl(''),
						},
					],
				},
			})
			.compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(InputComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
