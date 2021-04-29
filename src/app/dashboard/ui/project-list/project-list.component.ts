import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Project } from '../../../shared/types';

@Component({
	selector: 'app-project-list',
	templateUrl: './project-list.component.html',
	styleUrls: ['./project-list.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectListComponent {
	@Input() projects!: Project[];
}
