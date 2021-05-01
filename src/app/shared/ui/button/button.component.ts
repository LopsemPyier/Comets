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
	@Input() type: 'default' | 'primary' | 'secondary' = 'default';
	@Input() disabled = false;
	@Input() loading = false;
	@Output() buttonClick = new EventEmitter();

	public get classes(): string[] {
		let bgMode = 'bg';
		let textMode = 'text';
		let cursorMode = '';
		if (this.disabled) {
			cursorMode = 'cursor-not-allowed';
		}
		if (this.loading) {
			cursorMode = 'cursor-wait';
		}
		if (this.type !== 'default') {
			bgMode += `-${ this.type }`;
			textMode += `-on-${ this.type }`;
		}
		if (this.disabled || this.loading) {
			bgMode += '-light';
			textMode += '-light';
			if (this.type === 'default') {
				bgMode += 'er';
			}
		} else {
			bgMode += '-hover';
		}
		return [bgMode, textMode, cursorMode];
	}
}
