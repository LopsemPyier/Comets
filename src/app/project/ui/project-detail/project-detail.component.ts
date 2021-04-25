import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Project } from '../../../shared/types';

@Component({
	selector: 'app-project-detail',
	templateUrl: './project-detail.component.html',
	styleUrls: ['./project-detail.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectDetailComponent {

	@Input() project!: Project;

}
