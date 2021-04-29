import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Project } from '../../../shared/types';

@Component({
	selector: 'app-project-list-item',
	templateUrl: './project-list-item.component.html',
	styleUrls: ['./project-list-item.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectListItemComponent {
	@Input() project!: Project;
}
