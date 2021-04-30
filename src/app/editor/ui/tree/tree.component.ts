import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { FileNode, FileType } from '../../../shared/types';

@Component({
	selector: 'app-tree',
	templateUrl: './tree.component.html',
	styleUrls: ['./tree.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TreeComponent {
	@Input() files!: FileNode[];
	@Output() addFile = new EventEmitter<string | null>();
	@Output() addFolder = new EventEmitter<string | null>();
	@Output() delete = new EventEmitter<string>();
	@Output() rename = new EventEmitter<string>();

	selected: FileNode | null = null;
	parentSelected: FileNode | null = null;
	edit = false;

	selectFile(file: FileNode, parent: FileNode | null): void {
		if (this.selected) {
			this.selected.selected = false;
			if (this.selected.id === file.id) {
				this.selected = null;
				this.parentSelected = null;
				return;
			}
		}
		this.selected = file;
		this.parentSelected = parent;
		this.selected.selected = true;
	}

	onAddFile(): void {
		const newFile = {
			id: '',
			fileType: FileType.TEX,
			name: '',
			extension: 'tex',
			children: null,
			open: false,
			selected: false,
			parent: this.parentSelected ? this.parentSelected.id : null,
			edit: true,
			folder: false,
		};
		if (this.parentSelected && this.parentSelected.children) {
			this.parentSelected.children.push(newFile);
			this.selectFile(newFile, this.parentSelected);
		} else {
			this.files.push(newFile);
			this.selectFile(newFile, null);
		}
	}

	onAddFolder(): void {
		const newFolder = {
			id: '',
			fileType: FileType.FOLDER,
			name: '',
			extension: null,
			children: null,
			open: true,
			selected: false,
			parent: this.parentSelected ? this.parentSelected.id : null,
			edit: true,
			folder: true,
		};
		if (this.parentSelected && this.parentSelected.children) {
			this.parentSelected.children.push(newFolder);
			this.selectFile(newFolder, this.parentSelected);
		} else {
			this.files.push(newFolder);
			this.selectFile(newFolder, null);
		}
	}

	onDelete(): void {
		if (this.selected) {
			this.delete.emit(this.selected.id);
		}
	}

	onRename(): void {
		if (this.selected) {
			this.rename.emit(this.selected.id);
		}
	}
}
