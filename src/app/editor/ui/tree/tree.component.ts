import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { FileNode, FileType } from '../../../shared/types';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-tree',
	templateUrl: './tree.component.html',
	styleUrls: ['./tree.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TreeComponent {
	@Input() files$!: Observable<FileNode[]>;
	@Output() addFile = new EventEmitter<string | null>();
	@Output() addFolder = new EventEmitter<string | null>();
	@Output() delete = new EventEmitter<string>();

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

	onAddFile(): void {
		let parentId: string | null = null;
		if (this.selected) {
			parentId = (this.selected.fileType === FileType.FOLDER) ? this.selected.id : this.selected.parent;
		}
		this.addFile.emit(parentId);
	}

	onAddFolder(): void {
		let parentId: string | null = null;
		if (this.selected) {
			parentId = (this.selected.fileType === FileType.FOLDER) ? this.selected.id : this.selected.parent;
		}
		this.addFolder.emit(parentId);
	}

	onDelete(): void {
		if (this.selected) {
			this.delete.emit(this.selected.id);
		}
	}
}
