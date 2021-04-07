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
    let bgMode = 'bg';
    let textMode = 'text';
    let cursorMode = '';
    if (this.disabled) { cursorMode = 'cursor-not-allowed'; }
    if (this.loading) { cursorMode = 'cursor-wait'; }
    if (this.type !== 'default') {
      bgMode += `-${this.type}`;
      textMode += `-on-${this.type}`;
    }
    if (this.disabled || this.loading) {
      bgMode += '-light';
    } else {
      bgMode += '-hover';
    }
    return [bgMode, textMode, cursorMode];
  }
}
