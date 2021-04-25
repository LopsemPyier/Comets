import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IconModule } from '../icon/icon.module';

import { MessageComponent } from './message.component';

describe('MessageComponent', () => {
	let component: MessageComponent;
	let fixture: ComponentFixture<MessageComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [MessageComponent],
			imports: [IconModule]
		})
			.compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(MessageComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
