import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-message',
	templateUrl: './message.component.html',
	styleUrls: ['./message.component.scss']
})
export class MessageComponent {
	@Input() message = '';
	@Input() type: 'error' | 'warning' | 'success' | 'info' = 'error';

	public get icon(): string {
		switch (this.type) {
			case 'error':
				return 'error-warning-fill';

			case 'warning':
				return 'alert-fill';

			case 'info':
				return 'information-fill';

			case 'success':
				return 'checkbox-circle-fill';
		}
	}
}
