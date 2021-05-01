import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-message',
	templateUrl: './message.component.html',
	styleUrls: ['./message.component.scss']
})
export class MessageComponent {
	@Input() message = '';
	@Input() type: 'error' | 'warning' | 'success' | 'info' = 'error';
}
