import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { ButtonModule } from 'src/app/shared/button/button.module';
import { InputModule } from 'src/app/shared/input/input.module';
import { MessageModule } from 'src/app/shared/message/message.module';

import { SignupComponent } from './signup.component';

describe('SignupComponent', () => {
	let component: SignupComponent;
	let fixture: ComponentFixture<SignupComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [SignupComponent],
			imports: [
				RouterTestingModule,
				FormsModule,
				ReactiveFormsModule,
				ButtonModule,
				InputModule,
				MessageModule
			],
		})
			.compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(SignupComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
