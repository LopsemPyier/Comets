import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { FileNode, Project } from '../../types';

@Component({
	selector: 'app-side-bar',
	templateUrl: './side-bar.component.html',
	styleUrls: ['./side-bar.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideBarComponent {
	@Input() project!: Project;
	@Input() files!: FileNode[];
	@Output() addFile = new EventEmitter<string | null>();
	@Output() addFolder = new EventEmitter<string | null>();
	@Output() delete = new EventEmitter<string>();

}
