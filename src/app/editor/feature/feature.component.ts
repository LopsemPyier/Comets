import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { File, FileNode, FileType } from '../../shared/types';
import { IsLoadingService } from '@service-work/is-loading';
import { FilesService } from '../data-access/files.service';

@Component({
	selector: 'app-feature',
	templateUrl: './feature.component.html',
	styleUrls: ['./feature.component.scss'],
})
export class FeatureComponent implements OnInit {

	readonly LOADING_KEY = 'files_tree';
	files$ = new Observable<FileNode[]>();
	private id!: string;

	constructor(
		private route: ActivatedRoute,
		private isLoadingService: IsLoadingService,
		private filesService: FilesService,
	) {
	}

	private static buildTree(files: File[]): FileNode[] {
		return FeatureComponent.getChildren(files, null);
	}

	private static getChildren(files: File[], parentId: string | null): FileNode[] {
		return FeatureComponent.sort(files.filter(item => {
			if (parentId) {
				if (item.parent) {
					return item.parent.id === parentId;
				} else {
					return false;
				}
			} else {
				return !item.parent;
			}
		}).map(item => this.convertFileToNode(files, item)), FeatureComponent.compareFile);
	}

	private static convertFileToNode(files: File[], file: File): FileNode {
		return {
			id: file.id,
			name: file.name,
			fileType: file.fileType,
			extension: file.extension,
			open: false,
			selected: false,
			children: FeatureComponent.getChildren(files, file.id),
			parent: (file.parent) ? file.parent.id : null,
			edit: false,
			folder: file.fileType === FileType.FOLDER
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
		this.id = this.route.snapshot.params.id;
		this.files$ = this.isLoadingService.add(this.filesService.getFilesForProjectId(this.id).pipe(map(
			FeatureComponent.buildTree,
		)), {
			key: this.LOADING_KEY,
		});
	}

	addFile(parent: string | null): void {
		console.log(parent);
		this.isLoadingService.add(this.filesService.createFile('test', 'tex', parent, false, this.id)
			.subscribe(
				file => {
					console.log('File inserted', file);
				}, error => {
					console.log(error);
				}
			), {
			key: this.LOADING_KEY,
		});
	}

	addFolder(parent: string | null): void {
		this.isLoadingService.add(this.filesService.createFile('Folder', null, parent, true, this.id)
			.subscribe(
				folder => {
					console.log('Folder inserted', folder);
				}, error => {
					console.log(error);
				}
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
				}
			), {
			key: this.LOADING_KEY,
		});
	}

}
