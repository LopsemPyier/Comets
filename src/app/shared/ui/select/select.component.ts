import { Component, Input } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';
import { Icon } from '../icon/icons.type';

@Component({
	selector: 'app-select',
	templateUrl: './select.component.html',
	styleUrls: ['./select.component.scss'],
})
export class SelectComponent implements ControlValueAccessor {
	@Input() label = '';
	@Input() iconLeft: Icon | null = null;
	@Input() options!: { key: string, value: string }[];
	value = '';
	onChange!: (value: string) => void;
	onTouched!: () => void;
	disabled = false;

	constructor(public ngControl: NgControl) {
		ngControl.valueAccessor = this;
	}

	writeValue(value: string): void {
		this.value = value;
	}

	registerOnChange(fn: (value: string) => void): void {
		this.onChange = fn;
	}

	registerOnTouched(fn: () => void): void {
		this.onTouched = fn;
	}

	setDisabledState(disabled: boolean): void {
		this.disabled = disabled;
	}
}
