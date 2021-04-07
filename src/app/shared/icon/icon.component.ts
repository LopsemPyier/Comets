import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconComponent {
  @Input() icon!: string;
  @Input() size: 'lg' | 'md' | 'sm' | 'xs' = 'md';
  @Input() color:
    | 'error'
    | 'primary'
    | 'text'
    | 'text-light'
    | 'inverse'
    | 'inherit' = 'inherit';

  public get classes(): string[] {
    let sizeMode = '';
    switch (this.size) {
      case 'lg':
        sizeMode = 'w-6';
        break;
      case 'md':
        sizeMode = 'w-5';
        break;
      case 'sm':
        sizeMode = 'w-4';
        break;
      case 'xs':
        sizeMode = 'w-3';
        break;
    }
    let colorMode = '';
    switch (this.color) {
      case 'error':
        colorMode = 'text-danger dark:text-danger-light';
        break;

      case 'primary':
        colorMode = 'text-primary dark:text-primary';
        break;

      case 'text':
        colorMode = 'text-black dark:text-white';
        break;

      case 'text-light':
        colorMode = 'text-gray-lighter dark:text-gray-lighter';
        break;

      case 'inverse':
        colorMode = 'text-white dark:text-black';
        break;

      case 'inherit':
        colorMode = '';
        break;
    }

    return [sizeMode, colorMode];
  }

  public get style() {
    let sizeMode = '';
    switch (this.size) {
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
