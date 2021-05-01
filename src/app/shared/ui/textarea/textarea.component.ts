import { Component, Input } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';

@Component({
	selector: 'app-textarea',
	templateUrl: './textarea.component.html',
	styleUrls: ['./textarea.component.scss'],
})
export class TextareaComponent implements ControlValueAccessor {
	@Input() label = '';
	@Input() placeholder = '';
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

