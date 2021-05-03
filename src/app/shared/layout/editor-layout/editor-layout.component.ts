import { Component, OnInit } from '@angular/core';
import { File, FileNode, FileType, Project } from '../../types';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { IsLoadingService } from '@service-work/is-loading';
import { FilesService } from '../../../editor/data-access/files.service';
import { map, switchMap } from 'rxjs/operators';

@Component({
	selector: 'app-editor-layout',
	templateUrl: './editor-layout.component.html',
	styleUrls: ['./editor-layout.component.scss'],
})
export class EditorLayoutComponent implements OnInit {
	ngOnInit(): void {
	}

	/*readonly LOADING_KEY = 'files_tree';
	files$ = new Observable<FileNode[]>();
	project$!: Project;

	constructor(
		private route: ActivatedRoute,
		private isLoadingService: IsLoadingService,
		private filesService: FilesService,
		private projectService: ProjectService,
	) {
	}

	private static buildTree(files: File[]): FileNode[] {
		return EditorLayoutComponent.getChildren(files, null);
	}

	private static getChildren(files: File[], parentId: string | null): FileNode[] {
		return EditorLayoutComponent.sort(files.filter(item => {
			if (parentId) {
				if (item.parent) {
					return item.parent.id === parentId;
				} else {
					return false;
				}
			} else {
				return !item.parent;
			}
		}).map(item => this.convertFileToNode(files, item)), EditorLayoutComponent.compareFile);
	}

	private static convertFileToNode(files: File[], file: File): FileNode {
		return {
			id: file.id,
			name: file.name,
			fileType: file.fileType,
			extension: file.extension,
			open: false,
			selected: false,
			children: EditorLayoutComponent.getChildren(files, file.id),
			parent: (file.parent) ? file.parent.id : null,
			edit: false,
			folder: file.fileType === FileType.FOLDER,
		};
	}

	private static sort(array: FileNode[], compareFn: (a: FileNode, b: FileNode) => number): FileNode[] {
		const copy = array.slice();
		return copy.sort(compareFn);
	}

	private static compareFile(a: FileNode, b: FileNode): number {
		if (a.fileType === FileType.FOLDER) {
			if (b.fileType === FileType.FOLDER) {
				return +a.name - +b.name;
			} else {
				return -1;
			}
		} else {
			if (b.fileType === FileType.FOLDER) {
				return 1;
			} else {
				return +a.name - +b.name;
			}
		}
	}

	ngOnInit(): void {
		const id = this.route.snapshot.params.id;
		this.files$ = this.isLoadingService.add(
			this.projectService.getById(id).pipe(switchMap(project => {
				this.project$ = project;
				return this.filesService.getFilesForProjectId(id).pipe(map(
					EditorLayoutComponent.buildTree,
				));
			})), {
				key: this.LOADING_KEY,
			});
	}

	addFile(parent: string | null): void {
		console.log(parent);
		this.isLoadingService.add(this.filesService.createFile('test', 'tex', parent, false, this.project$.id)
			.subscribe(
				file => {
					console.log('File inserted', file);
				}, error => {
					console.log(error);
				},
			), {
			key: this.LOADING_KEY,
		});
	}

	addFolder(parent: string | null): void {
		this.isLoadingService.add(this.filesService.createFile('Folder', null, parent, true, this.project$.id)
			.subscribe(
				folder => {
					console.log('Folder inserted', folder);
				}, error => {
					console.log(error);
				},
			), {
			key: this.LOADING_KEY,
		});
	}

	delete(id: string): void {
		this.isLoadingService.add(this.filesService.deleteFile(id)
			.subscribe(
				res => {
					console.log('File deleted', res);
				}, error => {
					console.log(error);
				},
			), {
			key: this.LOADING_KEY,
		});
	}*/

}
