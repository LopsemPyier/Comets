import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Icon, toIconName } from './icons.type';

@Component({
	selector: 'app-icon',
	templateUrl: './icon.component.html',
	styleUrls: ['./icon.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconComponent {
	@Input() icon!: Icon;
	@Input() size: 'xl' | 'lg' | 'md' | 'sm' | 'xs' | 'fw' = 'xl';

	/*@Input() color:
		| 'error'
		| 'warning'
		| 'info'
		| 'success'
		| 'primary'
		| 'secondary'
		| 'text'
		| 'text-light'
		| 'inverse'
		| 'inherit' = 'inherit';*/

	get iconName(): string {
		return toIconName(this.icon);
	}

	get prefix(): string {
		if (this.icon === 'loading' || this.icon.startsWith('logo-')) {
			return 'bx-';
		} else {
			return 'ph-';
		}
	}

	get classes(): string[] {
		return [this.iconName, this.sizeClass];
	}

	get sizeClass(): string {
		return this.prefix + this.size;
	}

}
