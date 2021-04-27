import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FileNode } from '../../../shared/types';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-tree',
	templateUrl: './tree.component.html',
	styleUrls: ['./tree.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TreeComponent {
	@Input() files$!: Observable<FileNode[]>;
	selected: FileNode | null = null;

	selectFile(file: FileNode): void {
		if (this.selected) {
			this.selected.selected = false;
			if (this.selected.id === file.id) {
				this.selected = null;
				return;
			}
		}
		this.selected = file;
		this.selected.selected = true;
	}
}
