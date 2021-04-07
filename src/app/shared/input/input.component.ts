import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputComponent implements ControlValueAccessor {
  @Input() label = '';
  @Input() iconLeft: string | null = null;
  @Input() iconRight: string | null = null;
  @Input() type: 'text' | 'email' | 'password' | 'phone' = 'text';
  @Input() strengh = false;
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

  public get passwordStrengh(): string {
    if (this.ngControl.value.length === 0) { return 'w-0 bg-danger'; }
    let mode = 0;
    let reg = new RegExp('[0-9]+');

    if (this.ngControl.value.length > 10) { mode += 1; }
    if (reg.test(this.ngControl.value)) { mode += 1; }
    reg = new RegExp('[a-zA-Z]+');
    if (reg.test(this.ngControl.value)) { mode += 1; }
    reg = new RegExp('[^A-Za-z0-9]');
    if (reg.test(this.ngControl.value)) { mode += 1; }

    switch (mode) {
      case 1:
        return 'w-3/12 bg-danger';
      case 2:
        return 'w-6/12 bg-warning';
      case 3:
        return 'w-9/12 bg-success';
      case 4:
        return 'w-full bg-success';

      default:
        return 'no';
    }
  }
}
