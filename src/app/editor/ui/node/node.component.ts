import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { FileNode, FileType } from '../../../shared/types';

@Component({
	selector: 'app-node',
	templateUrl: './node.component.html',
	styleUrls: ['./node.component.scss'],
	changeDetection: ChangeDetectionStrategy.Default,
})
export class NodeComponent {
	@Input() file!: FileNode;
	@Input() parent: FileNode | null = null;
	@Output() fileSelect = new EventEmitter<{ file: FileNode, parent: FileNode | null }>();

	@ViewChild('input') input!: ElementRef;

	focus(): void {
		this.input.nativeElement.focus();
	}

	get icon(): string {
		if (this.file.fileType === FileType.FOLDER) {
			if (this.file.open) {
				return 'folder-open-fill';
			} else {
				return 'folder-fill';
			}
		} else {
			if (this.file.fileType === FileType.TEX) {
				return 'file-text-fill';
			} else {
				return this.file.fileType === FileType.IMAGE ? 'image-fill' : 'file-3-fill';
			}
		}
	}

	clicked(): void {
		this.file.open = !this.file.open;
		this.fileSelect.emit({ file: this.file, parent: this.parent });
	}
}
