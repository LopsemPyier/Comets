import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  @Input() label = '';
  @Input() type: 'default' | 'primary' | 'secondary' = 'default';
  @Input() disabled = false;
  @Input() loading = false;
  @Output() buttonClick = new EventEmitter();

  public get classes(): string[] {
    let colorMode = '';
    // if (this.primary) {
    //   if (this.disabled || this.loading) {
    //     colorMode = 'bg-primary-light text-gray-lightest';
    //   } else {
    //     colorMode = 'bg-primary text-white hover:bg-primary-light';
    //   }
    // } else if (this.secondary) {
    //   if (this.disabled || this.loading) {
    //     colorMode = 'bg-secondary-light text-gray-lightest';
    //   } else {
    //     colorMode = 'bg-secondary text-white hover:bg-secondary-light';
    //   }
    // } else {
    //   if (this.disabled || this.loading) {
    //     colorMode =
    //       'bg-gray-lightest text-gray-dark dark:bg-gray-dark dark:text-gray-light';
    //   } else {
    //     colorMode =
    //       'bg-gray-lighter text-black hover:bg-gray-light dark:bg-gray-darker dark:text-white dark:hover:bg-gray-dark';
    //   }
    // }
    return [colorMode];
  }
}
