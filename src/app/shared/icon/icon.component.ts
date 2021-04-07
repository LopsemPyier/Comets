import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconComponent {
  @Input() icon!: string;
  @Input() size: 'xl' | 'lg' | 'md' | 'sm' | 'xs' = 'md';
  @Input() color:
    | 'error'
    | 'warning'
    | 'info'
    | 'success'
    | 'primary'
    | 'secondary'
    | 'text'
    | 'text-light'
    | 'inverse'
    | 'inherit' = 'inherit';

  public get style() {
    let sizeMode = '';
    switch (this.size) {
      case 'xl':
        sizeMode = '3rem';
        break;
      case 'lg':
        sizeMode = '2rem';
        break;
      case 'md':
        sizeMode = '1.5rem';
        break;
      case 'sm':
        sizeMode = '1rem';
        break;
      case 'xs':
        sizeMode = '.75rem';
        break;
    }
    return { width: sizeMode, height: sizeMode };
  }

}
