import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';

@Component({
	selector: 'app-checkbox',
	templateUrl: './checkbox.component.html',
	styleUrls: ['./checkbox.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckboxComponent implements ControlValueAccessor {
	@Input() label = '';
	@Input() iconLeft: string | null = null;
	@Input() iconRight: string | null = null;
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
