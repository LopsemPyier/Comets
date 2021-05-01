import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Icon } from '../icon/icons.type';

@Component({
	selector: 'app-button',
	templateUrl: './button.component.html',
	styleUrls: ['./button.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
	@Input() label = '';
	@Input() icon!: Icon;
	@Input() type: 'default' | 'primary' | 'secondary' | 'error' = 'default';
	@Input() disabled = false;
	@Input() loading = false;
	@Output() buttonClick = new EventEmitter();
}
